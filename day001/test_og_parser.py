import py_opengraph

og_metadata = py_opengraph.PyOpenGraphParser.parse(url="https://www.idiotinside.com/")

print(og_metadata)

assert og_metadata['title'] == 'Idiot Inside'
assert og_metadata['url'] == 'https://www.idiotinside.com/'
