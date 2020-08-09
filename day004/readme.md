
## create virtualenv
```
virtualenv -p python3 venv
source venv/bin/activate
```

## install dependancies

```
pip install -r requirements.txt
```

## start mock server 
```
python app.py
```

## run async client
```
python test_error_handling.py <MOCK_END_POINT> <TOTAL_REQUESTS>

python test_error_handling.py http://localhost:5000 200
```

