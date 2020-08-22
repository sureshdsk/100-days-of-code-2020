from fastapi import FastAPI, Request, Response
from user_app import user_app

app = FastAPI()
app.mount("/users", user_app)


@app.middleware("http")
async def validate_api_key_header(request: Request, call_next):
    if 'x-api-key' in request.headers and request.headers['x-api-key'] == 'abcsecret':
        response = await call_next(request)
    else:
        response = Response(content='Unauthorized', status_code=401)
    return response


@app.get("/")
def home():
    return {"app": "Fast API"}




