# Fastapi - handling post requests with json payload

## create virtualenv
```
virtualenv -p python3 venv
source venv/bin/activate
```

## install dependancies
```
pip install fastapi

pip install uvicorn

```


## run 
```
uvicorn app:app --reload
```

## test
```
curl -X POST "http://127.0.0.1:8000/pet/" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"name\":\"Happy\",\"fav_food\":[\"milk\",\"dosa\"],\"type\":\"cat\"}"
```