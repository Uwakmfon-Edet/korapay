Feature: Airtime TopUp
    I want to be able to do an airtime purchase

     Scenario: Airtime TopUp
     Given I am on the internet banking dashboard after logging in with "0033518069" and "Test12345@6" and token as "12345"
     When I click on the Airtime Topup menu and select service provider
     And enter phone numnber and subscription plan
     When I verify the payment details
     And enter a valid OTP
     Then payment should be completed