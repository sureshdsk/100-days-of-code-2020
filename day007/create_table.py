from sqlalchemy import create_engine, text


def create_table():
    engine = create_engine('postgresql://postgres:postgres@localhost:5432/postgres')
    with engine.connect() as connection:
        schema = "dsk"
        query = f"""CREATE TABLE {schema}.movies (
id BIGINT, 
imdb_id VARCHAR(12), 
original_language VARCHAR(255), 
original_title VARCHAR(255), 
overview TEXT, 
revenue INT8, 
runtime FLOAT, 
status VARCHAR(24), 
tagline TEXT, 
title VARCHAR(255), 
vote_average FLOAT, 
vote_count INT4
)"""

        # rs = connection.execute(query)
        print(dir(connection))

if __name__ == '__main__':
    create_table()