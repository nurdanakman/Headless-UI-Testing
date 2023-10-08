const { expect } = require('chai');
const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({
        //default value is headless: true, you should add below code to set it false
        //headless: false
        headless: "new"
    });
    const page = await browser.newPage();

    await page.goto('https://www.google.com/', {
        waitUntil: 'load',
        //remove the timeout
        timeout: 0
    });

    const expectedTitle = 'Google';
    const pageTitle = await page.title();
    console.log('Expected Title:', expectedTitle);
    console.log('Actual Page Title:', pageTitle);

    expect(pageTitle, `Page title should be "${expectedTitle}", but it is "${pageTitle}"`).to.include(expectedTitle);

    await page.screenshot({path: "example_screenshot.png"});
    await browser.close();
})();