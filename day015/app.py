from fastapi import FastAPI
from user_app import user_app

app = FastAPI()
app.mount("/users", user_app)


@app.get("/")
def home():
    return {"app": "Fast API"}




