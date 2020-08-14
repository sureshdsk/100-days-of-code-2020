# Insert large volume of data into postgres with async 

## create virtualenv
```
virtualenv -p python3 venv
source venv/bin/activate
```

## install dependancies
```
pip install databases
pip install 'databases[postgresql]'
```


## run 
```
python test_async_db_insert.py <path to csv>
python test_async_db_insert_many.py <path to csv>
```

