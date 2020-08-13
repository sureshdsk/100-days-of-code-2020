# Insert large volume of data into postgres with COPY command

## create virtualenv
```
virtualenv -p python3 venv
source venv/bin/activate
```

## install dependancies

```
pip install -r requirements.txt
```

## run 
```
python import_csv_pg_copy_csv.py <path to csv>
```

