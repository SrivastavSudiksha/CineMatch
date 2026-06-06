from fastapi import FastAPI, HTTPException, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from database import movies_col, users_col
from recommender import get_recommendations
import hashlib, uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def hash_pw(p): return hashlib.sha256(p.encode()).hexdigest()

class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str

class LoginRequest(BaseModel):
    email: str
    password: str

class RecommendRequest(BaseModel):
    user_id: str
    mood: str

class WatchedRequest(BaseModel):
    user_id: str
    tmdb_id: int

@app.get("/")
def root():
    return {"status": "CineMatch API running"}

@app.post("/auth/register")
def register(req: RegisterRequest):
    if users_col.find_one({"email": req.email}):
        raise HTTPException(status_code=400, detail="Email already exists")
    token = str(uuid.uuid4())
    profile_id = str(uuid.uuid4())
    user = {
        "name": req.name,
        "email": req.email,
        "password": hash_pw(req.password),
        "token": token,
        "profiles": [{"profile_id": profile_id, "name": req.name, "avatar": req.name[0].upper(), "gradient": "gradient-1", "is_kids": False}]
    }
    users_col.insert_one(user)
    user.pop("_id", None)
    user.pop("password", None)
    return {"token": token, "user": user}

@app.post("/auth/login")
def login(req: LoginRequest):
    user = users_col.find_one({"email": req.email, "password": hash_pw(req.password)})
    if not user:
        raise HTTPException(status_code=404, detail="Not Found")
    user.pop("_id", None)
    user.pop("password", None)
    return {"token": user["token"], "user": user}

@app.get("/auth/me")
def me(authorization: Optional[str] = Header(None)):
    user = users_col.find_one({"token": authorization})
    if not user:
        raise HTTPException(status_code=404, detail="Not Found")
    user.pop("_id", None)
    user.pop("password", None)
    return user

@app.post("/recommend")
def recommend(req: RecommendRequest):
    user = users_col.find_one({"user_id": req.user_id})
    history = user["watch_history"] if user else []
    mood, results = get_recommendations(req.mood, history, movies_col)
    return {"detected_mood": mood, "recommendations": results}

@app.post("/watched")
def mark_watched(req: WatchedRequest):
    users_col.update_one(
        {"user_id": req.user_id},
        {"$addToSet": {"watch_history": req.tmdb_id}},
        upsert=True
    )
    return {"status": "saved"}

@app.get("/movies/search")
def search(title: str):
    results = list(movies_col.find(
        {"title": {"$regex": title, "$options": "i"}}
    ).limit(5))
    for r in results:
        r.pop("_id", None)
    return {"results": results}
