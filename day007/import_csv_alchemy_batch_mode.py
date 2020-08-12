import sys
import time
import csv
from sqlalchemy import create_engine, text


def read_csv(file_path):
    with open(file_path) as file:
        rows = csv.DictReader(file)
        return [row for row in rows]


def insert_data_batch(rows):
    engine = create_engine('postgresql://postgres:postgres@localhost:5432/postgres',
                           executemany_mode='batch',
                           executemany_batch_page_size=500)
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
        insert_rows = []
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
            insert_rows.append(_row)


        rs = connection.execute(text(query), insert_rows)


if __name__ == '__main__':
    file_path = sys.argv[1]
    rows = read_csv(file_path)
    start = time.time()
    insert_data_batch(rows)
    print('Took %s seconds ' % (time.time() - start))