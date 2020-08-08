import time
import sys
import requests

def run(count):
    start = time.time()
    results = []
    for i in range(count):
        r = requests.get('https://httpbin.org/get', params={'q': i})
        results.append(r.json())

    end = time.time()

    for result in results:
        print(result['args'])

    print('Took %s seconds to fetch %s requests' % (end - start, count))




if __name__ == '__main__':
    run(int(sys.argv[1]))