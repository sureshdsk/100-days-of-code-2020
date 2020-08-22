# Fastapi - custom auth middleware

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
curl --location --request GET 'http://127.0.0.1:8000/' 

curl --location --request GET 'http://127.0.0.1:8000/' \
--header 'x-api-key: abcsecret' 
```