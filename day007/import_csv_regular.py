import sys
import time
import csv
from sqlalchemy import create_engine, text


def read_csv(file_path):
    with open(file_path) as file:
        rows = csv.DictReader(file)
        return [row for row in rows]


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

        rs = connection.execute(query)


def insert_data(rows):
    engine = create_engine('postgresql://postgres:postgres@localhost:5432/postgres')
    with engine.connect() as connection:
        query = f"""
INSERT INTO dsk.movies(
id, imdb_id, original_language, original_title, overview, 
revenue, runtime, status, tagline, title, vote_average, vote_count)
VALUES (
:id, :imdb_id, :original_language, :original_title, :overview, 
:revenue, :runtime, :status, :tagline, :title, :vote_average, :vote_count
);
"""
        for row in rows:
            _row = {
               'id': row['id'],
               'imdb_id': row['imdb_id'],
               'original_language': row['original_language'],
               'original_title': row['original_title'],
               'overview': row['overview'],
               'revenue': row['revenue'] or 0,
               'runtime': row['runtime'] or 0,
               'status': row['status'],
               'tagline': row['tagline'],
               'title': row['title'],
               'vote_average': row['vote_average'] or 0,
               'vote_count': row['vote_count'] or 0
            }
            # print(_row)
            rs = connection.execute(text(query), **_row)


if __name__ == '__main__':
    file_path = sys.argv[1]
    rows = read_csv(file_path)
    start = time.time()
    insert_data(rows)
    print('Took %s seconds ' % (time.time() - start))