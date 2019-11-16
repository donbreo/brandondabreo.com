#!/usr/bin/env python

import requests
import urlparse
import urllib
from BeautifulSoup import BeautifulSoup

#f = open("Documents/inputfiles/carab")

#urls = f.readlines()

#urls = [line.rstrip("\n") for line in urls]

url = "http://pcdownload.in/2018/03/07/packt-publishing-advanced-shiny/"

#for url in urls:

r = requests.get(url)

soup = BeautifulSoup(r.content)

links = soup.findAll('div',{"class":"index_box"})

#   print links

for link in links:

#         tag = link.findAll('a')

#         print "%s"%(link.get("href"))
#   tag = link.get("href")

#         print tag


# for tag in soup.findAll('a', href=True):

#   output = urlparse.urljoin(url,tag)
#   print output

f.close()

