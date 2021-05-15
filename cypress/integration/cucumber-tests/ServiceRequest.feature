Feature: Service Request
    I want to be able to perform all service request actions

    Background:
        Given I am on the internet banking dashboard after logging in with "0033518069" and "Test12345@6" and token as "12345"

    Scenario: Verify all service request functionalities
        When User clicks on the Service Request Menu
        Then User can verify Request for Cheque Book
        And user can verify Statement RequestA
        And user can Submit a Complaint
        And User can Put a freeze on an account
        And user can Request for a new card
        And user can Hotlist card
        Then User should try the Modify account functionality
        And user can confirm Send Statement functionality
