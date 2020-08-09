import asyncio
import aiohttp
import time


class AsyncFetch:
    def __init__(self):
        self.loop = asyncio.get_event_loop()
        self.semaphore = asyncio.Semaphore(5)

    async def fetch(self, session, url, params=None):
        async with self.semaphore:
            async with session.get(url, params=params, ssl=False) as response:
                return await response.json()

    async def main(self, count):
        start = time.time()
        async with aiohttp.ClientSession() as session:
            tasks = []
            for c in range(count):
                tasks.append(
                    self.fetch(session, 'https://httpbin.org/get', params={'q': c})
                )
            results = await asyncio.gather(*tasks)
            print('Took %s seconds ' % (time.time() - start))

            return [result['args'] for result in results]

    def run(self, count):
        try:
            r = self.loop.run_until_complete(self.main(count))
            print(r)
        finally:
            self.loop.close()

if __name__ == '__main__':
    fetch = AsyncFetch()
    fetch.run(int(sys.argv[1]))