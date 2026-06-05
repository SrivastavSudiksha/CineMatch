from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
from database import movies_col, users_col
from recommender import get_recommendations
import bcrypt, jwt, uuid
from datetime import datetime, timedelta
from typing import Optional, List
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

JWT_SECRET = os.getenv("JWT_SECRET", "cinematch_secret_key_change_in_prod")
JWT_EXPIRE_HOURS = 72
security = HTTPBearer()

def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode(), hashed.encode())

def create_token(user_id: str) -> str:
    payload = {
        "sub": user_id,
        "exp": datetime.utcnow() + timedelta(hours=JWT_EXPIRE_HOURS)
    }
    return jwt.encode(payload, JWT_SECRET, algorithm="HS256")

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        payload = jwt.decode(credentials.credentials, JWT_SECRET, algorithms=["HS256"])
        user = users_col.find_one({"user_id": payload["sub"]})
        if not user:
            raise HTTPException(status_code=401, detail="User not found")
        return user
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")

class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str

class LoginRequest(BaseModel):
    email: str
    password: str

class ProfileCreate(BaseModel):
    name: str
    avatar: str        
    gradient: str        
    is_kids: bool = False

class ProfileUpdate(BaseModel):
    taste: Optional[dict] = None
    watch_history: Optional[List[int]] = None

class RecommendRequest(BaseModel):
    profile_id: str
    mood: str

class WatchedRequest(BaseModel):
    profile_id: str
    tmdb_id: int


@app.post("/auth/register")
def register(req: RegisterRequest):
    if users_col.find_one({"email": req.email}):
        raise HTTPException(status_code=400, detail="Email already registered")

    user_id = str(uuid.uuid4())
    users_col.insert_one({
        "user_id": user_id,
        "name": req.name,
        "email": req.email,
        "password": hash_password(req.password),
        "profiles": [],
        "created_at": datetime.utcnow().isoformat()
    })
    token = create_token(user_id)
    return {"token": token, "user": {"user_id": user_id, "name": req.name, "email": req.email, "profiles": []}}

@app.post("/auth/login")
def login(req: LoginRequest):
    user = users_col.find_one({"email": req.email})
    if not user or not verify_password(req.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    token = create_token(user["user_id"])
    profiles = user.get("profiles", [])
    return {
        "token": token,
        "user": {
            "user_id": user["user_id"],
            "name": user["name"],
            "email": user["email"],
            "profiles": profiles
        }
    }

@app.get("/auth/me")
def me(current_user=Depends(get_current_user)):
    return {
        "user_id": current_user["user_id"],
        "name": current_user["name"],
        "email": current_user["email"],
        "profiles": current_user.get("profiles", [])
    }


@app.post("/profiles")
def create_profile(req: ProfileCreate, current_user=Depends(get_current_user)):
    profiles = current_user.get("profiles", [])
    if len(profiles) >= 5:
        raise HTTPException(status_code=400, detail="Maximum 5 profiles allowed")

    profile = {
        "profile_id": str(uuid.uuid4()),
        "name": req.name,
        "avatar": req.avatar,
        "gradient": req.gradient,
        "is_kids": req.is_kids,
        "taste": None,
        "watch_history": [],
        "created_at": datetime.utcnow().isoformat()
    }
    profiles.append(profile)
    users_col.update_one(
        {"user_id": current_user["user_id"]},
        {"$set": {"profiles": profiles}}
    )
    return {"profile": profile}

@app.put("/profiles/{profile_id}")
def update_profile(profile_id: str, req: ProfileUpdate, current_user=Depends(get_current_user)):
    profiles = current_user.get("profiles", [])
    updated = False
    for p in profiles:
        if p["profile_id"] == profile_id:
            if req.taste is not None:
                p["taste"] = req.taste
            if req.watch_history is not None:
                p["watch_history"] = req.watch_history
            updated = True
            break
    if not updated:
        raise HTTPException(status_code=404, detail="Profile not found")

    users_col.update_one(
        {"user_id": current_user["user_id"]},
        {"$set": {"profiles": profiles}}
    )
    return {"status": "updated"}

@app.delete("/profiles/{profile_id}")
def delete_profile(profile_id: str, current_user=Depends(get_current_user)):
    profiles = [p for p in current_user.get("profiles", []) if p["profile_id"] != profile_id]
    users_col.update_one(
        {"user_id": current_user["user_id"]},
        {"$set": {"profiles": profiles}}
    )
    return {"status": "deleted"}

@app.post("/recommend")
def recommend(req: RecommendRequest, current_user=Depends(get_current_user)):
    profile = next((p for p in current_user.get("profiles", []) if p["profile_id"] == req.profile_id), None)
    history = profile["watch_history"] if profile else []
    mood, results = get_recommendations(req.mood, history, movies_col)
    return {"detected_mood": mood, "recommendations": results}

@app.post("/watched")
def mark_watched(req: WatchedRequest, current_user=Depends(get_current_user)):
    profiles = current_user.get("profiles", [])
    for p in profiles:
        if p["profile_id"] == req.profile_id:
            if req.tmdb_id not in p.get("watch_history", []):
                p.setdefault("watch_history", []).append(req.tmdb_id)
            break
    users_col.update_one(
        {"user_id": current_user["user_id"]},
        {"$set": {"profiles": profiles}}
    )
    return {"status": "saved"}

@app.get("/movies/search")
def search(title: str, current_user=Depends(get_current_user)):
    results = list(movies_col.find(
        {"title": {"$regex": title, "$options": "i"}}
    ).limit(5))
    for r in results:
        r.pop("_id", None)
    return {"results": results}