require "capybara"
require "capybara/dsl"
require "capybara/rspec"
require "capybara/poltergeist"
require "mysql2"

con = Mysql2::Client.new(host: "localhost", username: "root", password: "hoanghai096", database: "olm.vn")


include Capybara::DSL
Capybara.default_driver = :poltergeist

file = File.read("result.json")
data_hash = JSON.parse(file)

data_hash.each do |question|
  page.driver.browser.url_blacklist = [
    "https://tracking.yomedia.vn/",
    "https://delivery.yomedia.vn"
  ]

  if con.query("SELECT id FROM questions WHERE source_url='#{question["question_url"]}'").count == 0
    puts question["question_url"]
    visit question["question_url"]
    begin
      question_html = page.find(:xpath, "//div[@id='question']")["outerHTML"]
      string = "INSERT INTO `questions` (`group`, `category`, `title`, `question_html`, `source_url`)
  VALUES ('#{con.escape(question["group"])}','#{con.escape(question["category"])}','#{con.escape(question["question_title"])}','#{con.escape(question_html)}','#{con.escape(question["question_url"])}')"
      con.query(string)
    rescue
    end
  end
end
