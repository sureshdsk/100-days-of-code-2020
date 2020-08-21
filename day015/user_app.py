from fastapi import FastAPI

user_app = FastAPI()


@user_app.get("/")
def user_home():
    return {"service": "User Service"}


@user_app.get("/test")
def test():
    return {"hello": "User"}
