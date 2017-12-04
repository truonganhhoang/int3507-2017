# -*- coding: utf-8 -*-
import scrapy
from scrapy import Request
from pymongo import MongoClient


class JobsSpider(scrapy.Spider):
    name = 'jobs'
    allowed_domains = ['ask.bigschool.vn']
    start_urls = []

    def start_requests(self):
        urlRelative = 'https://ask.bigschool.vn/ask.html?type=&txtSearch=&o=0&c=-1&s=-1&t=-1&p='
        count = 0
        for page in range(1, 2594):
            count = count + 1
            url = urlRelative + str(page)
            print('page - ', count)
            yield scrapy.Request(url, self.parse)

    def save(self, item):
        client = MongoClient('localhost', 27017)
        db = client.data_crawler
        bigschool = db.bigschool
        bigschool.update(item, True)
        return item

    def parse(self, response):
        for block in response.xpath('//div[@id="result-ask"]/ul/li'):
            # block = response.xpath('//div[@id="result-ask"]/ul/li')[0]
            url = block.xpath('div[contains(@class,"ask-title")]/span/a/@href').extract_first()
            question = "".join(block.xpath('div/a/h5/text()').extract()).strip()
            subject = block.xpath('div[contains(@class,"ask-title")]/span/text()')[0].extract()
            grade = block.xpath('div[contains(@class,"ask-title")]/span/text()')[1].extract()

            record = {'question': question, 'subject': subject, 'grade': grade, 'url': url}
            print(record)

            yield record