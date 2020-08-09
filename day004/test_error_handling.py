import asyncio
import aiohttp
import time
import sys
import logging
from aiohttp.client_exceptions import ClientConnectorError, ClientError, ClientResponseError

logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)

class AsyncFetch:
    def __init__(self, api_host):
        self.api_host = api_host
        self.loop = asyncio.get_event_loop()
        self.semaphore = asyncio.Semaphore(5)

    async def fetch(self, session, url, params=None):
        async with self.semaphore:
            try:
                async with session.get(url, params=params, ssl=False, raise_for_status=True) as response:
                    logging.info('status: %s' % response.status)
                    return response.status, await response.json()
            except (ClientError, ClientConnectorError, ClientResponseError) as e:
                logging.error('Error: %s %s' %("="*20, str(e)))
                logging.exception(e)
                return None, None

    async def main(self, count):
        start = time.time()
        async with aiohttp.ClientSession() as session:
            tasks = []
            for c in range(count):
                tasks.append(
                    self.fetch(session, self.api_host, params={'q': c})
                )
            responses = await asyncio.gather(*tasks)
            logging.info('Took %s seconds ' % (time.time() - start))
            return responses

    def process_responses(self, responses):
        logging.info(responses)
        result = []
        for status, response in responses:
            logging.info(response)
            if status == 200:
                result.append(response)
        return result

    def run(self, count):
        try:
            responses = self.loop.run_until_complete(self.main(count))
            results = self.process_responses(responses)
            logging.info(results)
        finally:
            self.loop.close()


if __name__ == '__main__':
    fetch = AsyncFetch(sys.argv[1])
    fetch.run(int(sys.argv[2]))
