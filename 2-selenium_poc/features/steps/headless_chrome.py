from behave import given, when, then
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

@given('the Chrome browser is opened in headless mode')
def open_headless_chrome(context):
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # Headless modu etkinleştir
    context.driver = webdriver.Chrome(options=chrome_options)

@when('I navigate to "{url}"')
def navigate_to_url(context, url):
    context.driver.get(url)

@then('I should see "{expected_title}" in the page title')
def verify_page_title(context, expected_title):
    actual_title = context.driver.title
    assert expected_title in actual_title, f"Expected '{expected_title}' in title, but got '{actual_title}'"

@then('I close the headless browser')
def close_headless_browser(context):
    context.driver.quit()
