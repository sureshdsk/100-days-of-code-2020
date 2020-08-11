import logging
import asyncio
from databases import Database

DATABASE_URL = 'postgresql://postgres:postgres@127.0.0.1:5432/postgres'


async def main():
    async with Database(DATABASE_URL) as database:
        transaction = await database.transaction()
        try:
            schema = 'suresh'
            query = f"""CREATE TABLE {schema}.todo (id BIGSERIAL PRIMARY KEY, task TEXT, completed BOOLEAN)"""
            await database.execute(query=query)
        except Exception as e:
            logging.exception(e)
            logging.error('Error in creating table. Rollback')
            await transaction.rollback()
        else:
            await transaction.commit()
            logging.info('Table created')


if __name__ == '__main__':
    asyncio.run(main())
