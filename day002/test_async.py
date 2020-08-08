import sys
import asyncio
import aiohttp
import time


class AsyncFetch:
    def __init__(self):
        self.loop = asyncio.get_event_loop()

    async def fetch(self, session, url, params=None):
        async with session.get(url, params=params) as response:
            return await response.json()

    async def main(self, count):
        start = time.time()
        async with aiohttp.ClientSession() as session:
            tasks = []
            for i in range(count):
                tasks.append(
                    self.fetch(session, 'https://httpbin.org/get', params={'q': i})
                )
            results = await asyncio.gather(*tasks)

        end = time.time()

        for result in results:
            print(result['args'])

        print('Took %s seconds to fetch %s requests' % (end - start, count))

    def run(self, count):
        self.loop.run_until_complete(self.main(count))


if __name__ == '__main__':
    fetch = AsyncFetch()
    fetch.run(int(sys.argv[1]))