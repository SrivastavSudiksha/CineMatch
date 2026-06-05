import pandas as pd
import json
from database import movies_col

df = pd.read_csv("data/archive/tmdb_5000_movies.csv")

for _, row in df.iterrows():
    try:
        genres = json.loads(row["genres"])
        genre_names = [g["name"] for g in genres]
    except:
        genre_names = []

    movies_col.insert_one({
        "tmdb_id": int(row["id"]),
        "title": row["title"],
        "genres": genre_names,
        "overview": str(row["overview"]),
        "vote_average": float(row["vote_average"]),
        "popularity": float(row["popularity"])
    })

print("Done! Movies loaded:", movies_col.count_documents({}))