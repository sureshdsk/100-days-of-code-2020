import re
from bs4 import BeautifulSoup
from urllib.request import urlopen, Request


class PyOpenGraphParser:
    @classmethod
    def parse(cls, url=None, html=None):
        if url:
            html = cls._fetch_url(url)
        return cls._parse_html(html)

    @classmethod
    def _fetch_url(cls, url):
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.3'
        }
        req = Request(url=url, headers=headers)
        with urlopen(req) as r:
            return r.read().decode('utf-8')

    @classmethod
    def _parse_html(cls, html):
        if not isinstance(html,BeautifulSoup):
            doc = BeautifulSoup(html, features='html.parser')
        else:
            doc = html
        ogs = doc.html.head.findAll(property=re.compile(r'^og'))
        og_data = {}
        for og in ogs:
            if og.has_attr(u'content'):
                og_data[og[u'property'][3:]]=og[u'content']
        return og_data


