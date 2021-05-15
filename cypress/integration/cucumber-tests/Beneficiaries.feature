Feature: Beneficiaries
    I want to be able to add, delete, edit and make payment to a beneficiary

    Background: Login to the Internet banking web application
        Given I am on the internet banking dashboard after logging in with "0033518069" and "Test12345@6" and token as "12345"

    # This scenario works as expected but is we only verify since 'Add Banaficiary isn't working at the moment
    # Constantly deleting benficiaries will make the list become empty

    Scenario: Add / Remove Beneficiaries
        When I click on the Beneficiaries menu
        Then I should be able to delete beneficiary
        When I click on Add Beneficiary menu
        Then I should be able to Add a beneficiary

