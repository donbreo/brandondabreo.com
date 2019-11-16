#!/usr/bin/env python

import requests
#import urllib.parse as urlparse
import urllib
from bs4 import BeautifulSoup
from flask import Flask, render_template
app = Flask(__name__)
 


#f = open("Documents/inputfiles/carab")

#urls = f.readlines()

#urls = [line.rstrip("\n") for line in urls]

url = "http://skinhairyou.com"

#for url in urls:

r = requests.get(url)

soup = BeautifulSoup(r.content,'lxml')

#links = soup.findAll('div',{"class":"index_box"})
links =soup.find_all("a")
for link in links:
	if "Download" in link.text:
		print(link.attrs['href'])


urls = []
for li_tag in soup.find_all("li"):
	a_tag = li_tag.find('a')
	urls.append(a_tag.attrs['href'])
print(*urls, sep='\n')
print (soup.find('a').href)
#print (soup)
#print (links)
# @app.route("/")
# def hello():
# 	url = "http://brandondabreo.com"
# 	r = requests.get(url)
# 	soup = BeautifulSoup(r.content,features="html.parser")
# 	return str(soup)

	
# f= open("index.html","w+")
# f.write(str(soup))


#for link in links:

#         tag = link.findAll('a')

#         print "%s"%(link.get("href"))
#   tag = link.get("href")

#         print tag


# for tag in soup.findAll('a', href=True):

#   output = urlparse.urljoin(url,tag)
#   print output

#f.close()

