import sys
import time
import csv
import asyncio
from databases import Database

DATABASE_URL = 'postgresql://postgres:postgres@localhost:5432/postgres'


def read_csv(file_path):
    with open(file_path) as file:
        rows = csv.DictReader(file)
        return [row for row in rows]


async def insert_record(database, query, values):
    return await database.execute(query=query, values=values)


async def insert_records(database, rows):
    insert_rows = []
    for row in rows:
        _row = {
            'id': int(row['id'] or 0),
            'imdb_id': row['imdb_id'],
            'original_language': row['original_language'],
            'original_title': row['original_title'],
            'overview': row['overview'],
            'revenue': int(row['revenue'] or 0),
            'runtime': float(row['runtime'] or 0),
            'status': row['status'],
            'tagline': row['tagline'],
            'title': row['title'],
            'vote_average': float(row['vote_average'] or 0),
            'vote_count': int(row['vote_count'] or 0)
        }
        insert_rows.append(_row)

    query = """
INSERT INTO dsk.movies(
id, imdb_id, original_language, original_title, overview, 
revenue, runtime, status, tagline, title, vote_average, vote_count)
VALUES (
:id, :imdb_id, :original_language, :original_title, :overview, 
:revenue, :runtime, :status, :tagline, :title, :vote_average, :vote_count
);"""

    tasks = []
    for record in insert_rows:
        tasks.append(insert_record(database, query, record))
    results = await asyncio.gather(*tasks)


async def main(file_path):
    rows = read_csv(file_path)
    async with Database(DATABASE_URL) as database:
        start = time.time()
        await insert_records(database, rows)
        print('Took %s seconds ' % (time.time() - start))


if __name__ == '__main__':
    file_path = sys.argv[1]
    start = time.time()
    asyncio.run(main(file_path))
