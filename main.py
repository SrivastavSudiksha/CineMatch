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

class RegisterRequest(BaseModel):
    username: str
    email: str
    password: str

class LoginRequest(BaseModel):
    email: str
    password: str

class RecommendRequest(BaseModel):
    mood: str
    genres: Optional[list[str]] = []

def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()

def get_current_user(authorization: Optional[str]) -> dict:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing or invalid Authorization header")
    token = authorization.split(" ", 1)[1]
    user = users_col.find_one({"token": token}, {"_id": 0, "password": 0})
    if not user:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return user

@app.post("/auth/register")
def register(body: RegisterRequest):
    if users_col.find_one({"email": body.email}):
        raise HTTPException(status_code=400, detail="Email already registered")
    token = str(uuid.uuid4())
    user = {
        "username": body.username.strip(),
        "email": body.email.lower().strip(),
        "password": hash_password(body.password),
        "token": token,
    }
    users_col.insert_one(user)
    return {
        "message": "Registration successful",
        "token": token,
        "username": user["username"],
        "email": user["email"],
    }

@app.post("/auth/login")
def login(body: LoginRequest):
    user = users_col.find_one({"email": body.email.lower().strip()})
    if not user or user["password"] != hash_password(body.password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    new_token = str(uuid.uuid4())
    users_col.update_one({"email": user["email"]}, {"$set": {"token": new_token}})
    return {
        "message": "Login successful",
        "token": new_token,
        "username": user["username"],
        "email": user["email"],
    }

@app.get("/auth/me")
def me(authorization: Optional[str] = Header(None)):
    user = get_current_user(authorization)
    return {"username": user["username"], "email": user["email"]}

@app.get("/")
def root():
    return {"status": "CineMatch API is running"}

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/recommend")
def recommend(body: RecommendRequest, authorization: Optional[str] = Header(None)):
    get_current_user(authorization)
    results = get_recommendations(body.mood, body.genres)
    return {"recommendations": results}