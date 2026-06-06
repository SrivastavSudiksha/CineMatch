from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from database import movies_col, users_col
from recommender import get_recommendations

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class RecommendRequest(BaseModel):
    user_id: str
    mood: str

class WatchedRequest(BaseModel):
    user_id: str
    tmdb_id: int

@app.get("/")
def root():
    return {"status": "CineMatch API running"}

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
