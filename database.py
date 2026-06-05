from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["cinematch"]

movies_col = db["movies"]
users_col = db["users"]