# -*- coding: utf-8 -*-
import scrapy
from scrapy import Request
from pymongo import MongoClient


class JobsSpider(scrapy.Spider):
    name = 'jobs'
    allowed_domains = ['dictionary.cambridge.org']
    start_urls = []

    # def __init__(self, *a, **kw):
    #     super(JobsSpider, self).__init__(*a, **kw)
    #     self.start_urls.append("http://www.oxfordlearnersdictionaries.com/definition/english/science?q=science")
    # self.start_urls.append(
    #     "http://dictionary.cambridge.org/dictionary/english-vietnamese/superficial?q=superficiality")

    def start_requests(self):
        urlRelative = 'https://ask.bigschool.vn/ask.html?type=&txtSearch=&o=0&c=-1&s=-1&t=-1&p='
        # url = urlRelative + '1230'
        # yield scrapy.Request(url, self.parse)
        count = 0
        for page in range(1, 2594):
            count = count + 1
            url = urlRelative + str(page)
            print('page - ', count)
            yield scrapy.Request(url, self.parse)

    def save(self, item):
        # _word_find = self.db[self.collection_name].find({'word': item['word'], 'pos': item['pos']})

        # client = MongoClient('localhost', 27017)
        # db = client.oxford
        # cambridge_vi = db.cambridge_vi
        # cambridge_vi.update({'word': item['word'], 'pos': item['pos']}, item, True)
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
            # new_word = {'word': word,
            #             'pos': pos,
            #             'pron': pron,
            #             'defines': define_data,
            #             'url': url,
            #             'words_form': word_form_list,
            #             'source': 'cambridge_vi'}
            yield record

            # self.save(new_word)
            # recusive

            # for link in response.xpath('//a/@href'):
            #     link_next = link.extract()
            #     if "http://dictionary.cambridge.org/dictionary/english-vietnamese/" in link_next:
            #         yield Request(link_next, callback=self.parse)
