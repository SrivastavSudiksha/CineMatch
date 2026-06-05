from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

model = SentenceTransformer('all-MiniLM-L6-v2')

MOOD_MAP = {
    "sad": ["Drama", "Romance"],
    "happy": ["Comedy", "Animation", "Family"],
    "excited": ["Action", "Adventure", "Thriller"],
    "scared": ["Horror", "Mystery"],
    "bored": ["Comedy", "Action", "Science Fiction"],
    "romantic": ["Romance", "Drama"],
    "stressed": ["Comedy", "Animation", "Family"]
}

MOOD_KEYS = list(MOOD_MAP.keys())
MOOD_EMBEDDINGS = model.encode(MOOD_KEYS)

def detect_mood(mood_text: str) -> str:
    user_embedding = model.encode([mood_text])
    sims = cosine_similarity(user_embedding, MOOD_EMBEDDINGS)[0]
    return MOOD_KEYS[np.argmax(sims)]

def get_recommendations(mood_text: str, watch_history: list, movies_col):
    mood = detect_mood(mood_text)
    target_genres = MOOD_MAP[mood]

    movies = list(movies_col.find({
        "genres": {"$in": target_genres},
        "tmdb_id": {"$nin": watch_history}
    }).sort("vote_average", -1).limit(10))

    for m in movies:
        m.pop("_id", None)

    return mood, movies