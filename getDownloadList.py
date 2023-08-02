from playwright.sync_api import sync_playwright

list = []

def run(playwright):
    chromium = playwright.chromium
    browser = chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()
    page.goto('https://hsefz.aeilot.top')
    href_list = page.query_selector_all('a')
    for href in href_list:
        if href.get_attribute('class').startswith('notion-collection-card'):
            list.append('https://hsefz.aeilot.top' + href.get_attribute('href'))
    print(list)
    browser.close()

with sync_playwright() as playwright:
    run(playwright)