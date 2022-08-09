import scrapy


class FarwideSpider(scrapy.Spider):
    name = "farwide"

    # def start_requests(self):
    start_urls = [
        "https://www.farandwide.com/s/best-food-every-country-68d76e2bd6204526",
    ]
        # for url in urls:
        #     yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        # page = response.url.split("/")[-2]
        filename = "farwidefood_list.csv"
        with open(filename, "w") as f:

            for country_food in response.css('h2'):
                res = country_food.css('::text').get()
                i = 0
                try:
                    while i < len(res) and res[i] != ":":
                        i += 1
                    country = res[:i]
                except:
                    country = ""
                try:
                    food = res[i+2:]
                except:
                    food = ""
                f.write(f"{country},{food}\n")

        # filename = f'foods_list.txt'
        # with open(filename, 'wb') as f:
        #     f.write(response.body)
        # self.log(f'Saved file {filename}')
