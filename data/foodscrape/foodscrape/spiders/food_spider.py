import scrapy


class FoodSpider(scrapy.Spider):
    name = "food"

    # def start_requests(self):
    start_urls = [
        "https://tastessence.com/list-of-national-dishes-around-world",
    ]
        # for url in urls:
        #     yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        # page = response.url.split("/")[-2]
        filename = "foods_list.csv"
        with open(filename, "w", encoding="utf-8") as f:

            for country_food in response.css('h3'):
                res = country_food.css('::text').get()
                i = 0
                try:
                    while i < len(res) and res[i] != "(":
                        i += 1
                    country = res[:i]
                except:
                    country = ""
                try:
                    j = i + 1
                    while j < len(res) and res[j] != ")":
                        j += 1
                    food = res[i+1:j]
                except:
                    food = ""
                f.write(f"{country},{food}\n")

        # filename = f'foods_list.txt'
        # with open(filename, 'wb') as f:
        #     f.write(response.body)
        # self.log(f'Saved file {filename}')