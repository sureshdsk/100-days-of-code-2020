import sys
import time
import csv
import io
from sqlalchemy import create_engine
import logging


def read_csv(file_path):
    with open(file_path) as file:
        rows = csv.DictReader(file)
        return [row for row in rows]


def bulk_copy(engine, schema, table_name, values):
    csv_file = io.StringIO()
    headers = list(values[0].keys())
    writer = csv.DictWriter(csv_file, headers)
    writer.writerows(values)
    csv_file.seek(0)

    copy_stmt = """COPY {table} ({cols}) FROM STDIN CSV""".format(table=table_name, cols=','.join(headers))
    conn = engine.raw_connection()
    try:
        with conn.cursor() as cur:
            cur.execute('SET search_path TO {schema}'.format(schema=schema))
            cur.copy_expert(copy_stmt, csv_file)
        conn.commit()
    except Exception as e:
        logging.exception(e)
        conn.rollback()
        raise
    finally:
        conn.close()


def insert_data_batch(rows):
    engine = create_engine('postgresql://postgres:postgres@localhost:5432/postgres')
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

    schema = 'dsk'
    table_name = 'movies'
    bulk_copy(engine, schema, table_name, insert_rows)




if __name__ == '__main__':
    file_path = sys.argv[1]
    rows = read_csv(file_path)
    start = time.time()
    insert_data_batch(rows)
    print('Took %s seconds ' % (time.time() - start))