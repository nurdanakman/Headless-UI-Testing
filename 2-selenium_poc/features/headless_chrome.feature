Feature: Headless Chrome UI Test
  In order to test a web application
  As a tester
  I want to perform UI testing using headless Chrome

  Scenario: Navigating to a webpage
    Given the Chrome browser is opened in headless mode
    When I navigate to "https://www.google.com/"
    Then I should see "Google" in the page title
