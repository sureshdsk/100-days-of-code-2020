# Experimenting with inserting large volume of data into postgres

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
# create table 
python create_table.py


# sequential insert
python import_csv_regular.py <path to csv>

# batch & insert
python import_csv_batch.py <path to csv>

# sqlalchemy batch mode
python import_csv_alchemy_batch_mode.py <path to csv>
```

