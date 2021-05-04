Feature: Login to Internet Banking 
I want to be able to login to Internet banking Web

Scenario: Login to Internet banking with valid credentials

Given I am on the Internet Banking Login page
When I input valid userID as "0015969269" and Password ss "Test1234@5"
And click the login button
Then user should be navigated to the token page
When user enters token as "12345" and validates
Then user should be navigated to the dashboard