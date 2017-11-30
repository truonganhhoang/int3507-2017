# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class OlmVnItem(scrapy.Item):
    group = scrapy.Field()
    category = scrapy.Field()
    question_title = scrapy.Field()
    question_url = scrapy.Field()
    question_content = scrapy.Field()
    link = scrapy.Field()
    pass
