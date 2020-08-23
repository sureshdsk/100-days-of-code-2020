from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional, List


app = FastAPI()


class Pet(BaseModel):
    name: str
    description: Optional[str] = None
    fav_food: List[str] = []
    type: str


@app.get("/")
def home():
    return {"app": "Fast API"}


@app.post("/pet/")
async def add_pet(pet: Pet):
    return pet

