from scrapy import Spider
from scrapy.selector import Selector
from scrapy import Request
from olm_vn.items import OlmVnItem


class OlmvnSpider(Spider):
    name = "olm.vn"
    allowed_domains = ["olm.vn"]
    start_urls = []

    def start_requests(self):
        for page_num in range(1, 9):
            url = "https://olm.vn/toan-lop-" + str(page_num)
            yield Request(url, self.parse_group)

    def parse_group(self, response):
        group = Selector(response).xpath('/html/body/div[3]/div/div[2]/div[2]/h1/a/text()').extract()[0].strip()
        categories = Selector(response).xpath('//div[@class="gradeblock"]')
        item = OlmVnItem()
        item['group'] = group
        for category in categories:
            item['category'] = category.xpath('./h2/text()').extract()[0].strip()
            question_paths = category.xpath('./ul/li/a/@href').extract()
            question_titles = category.xpath('./ul/li/a/text()').extract()
            for index, question_path in enumerate(question_paths):
                question_url = 'https://olm.vn' + question_path
                item['question_url'] = question_url
                item['question_title'] = question_titles[index]
         #       request = Request(question_url, self.parse_question)
         #       request.meta['item'] = item
                yield item

 #   def parse_question(self, response):
   #     item = response.meta['item']
      #  item['question_title'] = \
      #      Selector(response).xpath('/html/body/div[3]/div/div[1]/div[1]/div[1]/span[3]/b/a/text()').extract()[
     #           0].strip()
       # item['question_content'] = Selector(response).xpath('//*[@id="question"]').extract()[0]
        #yield item
