import sys
import asyncio
import aiofiles
import io
import csv


async def read_file(file_path):
    async with aiofiles.open(file_path, mode='r') as f:
        contents = await f.read()
    print(contents)


async def read_file_line_by_line(file_path):
    async with aiofiles.open(file_path, mode='r') as f:
        async for line in f:
            print(line)


async def read_csv_file_with_dict_reader(file_path):
    async with aiofiles.open(file_path, mode='r') as f:
        contents = await f.read()
    # print(contents)
    csv_file = io.StringIO(contents)
    reader = csv.DictReader(csv_file)
    for row in reader:
        print(row)


if __name__ == '__main__':
    path = sys.argv[1]
    # asyncio.run(read_file(path))
    # asyncio.run(read_file_line_by_line(path))
    asyncio.run(read_csv_file_with_dict_reader(path))