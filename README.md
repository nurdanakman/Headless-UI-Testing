# Headless UI Testing

### **Headless UI mean?**

We know that any software’s User Interface or UI is its most integral part. So, when it comes to Headless Browsers, it means a browser without a user interface or “head.” So, when the browser is headless, the GUI is hidden. Therefore, you can’t see anything when you use a headless browser to access any website. However, the program runs in the background.

- To elaborate, Headless Browser is just like any other browser, with the only difference being that nothing is visible on the screen.
- A headless browser is similar to a normal browser that performs functions such as navigating pages, clicking links, downloading content, and many more.
- But, with a normal browser, you can check each step and proceed with the help of a GUI presentation. At the same time, you will use Command-line or Console Interface to keep track of changes.

> **The difference between UI and GUI is as follows:**
- UI stands for User Interface, which refers to the means through which a user interacts with a software or system.
- GUI stands for Graphical User Interface, which specifically refers to a type of user interface that utilizes graphical elements such as icons, buttons, and windows to facilitate user interaction.
In terms of their differences, UI encompasses a wider range of interactions, including both graphical and non-graphical elements such as text-based interfaces or voice-based interfaces. GUI, on the other hand, focuses specifically on graphical elements and visual feedback to enable user interaction. In summary, while GUI is a specific type of UI that relies on visual elements for user interaction, UI encompasses a broader range of interactions, including both graphical and non-graphical interfaces.
> 

### Importance Of Headless Browser

**faster than your typical browsers**, as you can bypass all the time you take to load the CSS

**Scraping Websites:** You can scrape the HTML of a website without rendering the full browser.

**Shorter Development Time:** Checking the code changes for websites from the command line saves developers time and effort.

**Performance Monitoring with Headless Scripts:** You can monitor the performance of network applications using headless browsers. Many developers [automate screen capture](https://www.browserstack.com/screenshots) of the website image to check the layouts of their website.

### **What is Headless Browser Testing?**

Headless UI Testing is a type of software testing that **focuses on the functionality and behavior of the underlying code of a user interface (UI)**, **without the need for a graphical user interface (GUI).** It involves testing the application's logic and interactions **directly at the code level, rather than relying on the UI components.**

By utilizing headless browsers or frameworks, developers can simulate user interactions and validate the expected behavior of their UI components. This approach allows for **faster** and more efficient testing, as it eliminates the need for rendering and interacting with a GUI.

Headless UI Testing is particularly useful for automating tests, as it **enables developers to run tests in a headless environment, such as a continuous integration (CI) pipeline,** without the need for a visible user interface. This makes it easier to integrate UI tests into the development workflow and ensure consistent results across different environments.

Overall, Headless UI Testing offers a powerful way to validate the **functionality, performance, and stability of UI components** by directly interacting with the underlying code.

With headless browser testing, you will perform [end-to-end tests](https://www.browserstack.com/guide/end-to-end-testing) where the browser will not load the application’s user interface. Therefore, everything runs faster, and the tests interact with the page directly, **eliminating any chances of instability. Your tests become more reliable, faster, and efficient.**

### **Some cases where you may use headless browser testing are**:

- Automation of HTML responses like form submission, mouse-clicking, etc.
- Handling JavaScript execution
    - JavaScript is a programming language commonly used to add interactivity and dynamic features to websites. In headless browser testing, the headless browser is capable of executing JavaScript code just like a regular browser, allowing the testing of JavaScript-dependent functionality, such as user interactions, dynamic content rendering, and AJAX requests.
    By handling JavaScript execution, headless browsers can accurately simulate user interactions and test the behavior of web applications that heavily rely on JavaScript. This ensures that the application functions correctly and behaves as expected, even without a visible graphical user interface (GUI).
- Scraping the content from the website
    - To scrape the content from a website means to extract data or information from that website. It involves using a web scraping tool or library to access the HTML code of the website and retrieve specific data elements.
    For example, if you want to scrape a news website, you can extract the article titles, authors, and publication dates. Similarly, if you want to scrape an e-commerce website, you can extract product names, prices, and customer reviews.
    By scraping websites, you can automate the process of gathering data from multiple sources, which can be useful for various purposes such as market research, data analysis, and content aggregation.
- Monitoring the network
- Handling Ajax Calls
- Generating screenshots of webpages

This was just the tip of the iceberg, and many more use-cases exist. However, you should know that headless browser testing has its usage, whereas normal testing has its own. Use the combination of the two to ensure you get the best of both worlds.

> **AJAX stands for Asynchronous JavaScript and XML**. It is a set of web development to build more responsive websites and applications. AJAX allows web pages to update their content without users having to reload the page.
> 
> 
> 
> 
> 
> 

### **Frameworks used for Headless Browser Testing**

1. **Puppeteer**: Puppeteer is a Node.js library developed by Google that provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It's widely used for web scraping, automating browser tasks, and taking screenshots or generating PDFs from web pages.
    1. install **node** on the local
    2. `npm i puppeteer` on terminal
        
        > Remember that by default, Puppeteer is running on headless mode, so you won’t see anything happening in the browser even if you are running your script.
        > 
    3. `node js_file` to run the test
    4. `npm install mocha chai --save-dev`
    5. `npx mocha puppeteer_poc.js`
    
    ```jsx
    const puppeteer = require('puppeteer')
    ;(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://bstackdemo.com/')
    await browser.close()
    })()
    ```
    
    > "pyppeteer" is known as a port of Puppeteer for Python. This library allows you to use the features of Puppeteer with Python. This way, you can use Puppeteer with Python and Behave.
    > 
2. **Selenium WebDriver**: Selenium is a widely used web automation framework that supports multiple programming languages. You can use the "headless" option to run Chrome in a headless mode with Selenium WebDriver, making it suitable for automated testing and web scraping.
    1. `npm install selenium-webdriver`
    2. `pip install behave`
    3. `pip install selenium`
    4. `behave` → for run all feature files
    
    With the **addArgument() method,** you can execute the headless mode from the ChromeOptions class delivered by the Selenium WebDriver.
    
    ```jsx
    ChromeOptions options = new ChromeOptions()
    options.addArgument("headless");
    ChromeDriver driver = new ChromeDriver(options);
    ```
    

Resources:

https://www.browserstack.com/guide/what-is-headless-browser-testing

https://www.hostinger.com/tutorials/what-is-ajax

https://www.youtube.com/watch?v=8N8xyqFgxYI
