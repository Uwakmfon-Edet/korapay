Feature: Logout

    Scenario: Logout
        Given I am logged into the appliocation
        When I click on the prfile nav icon
        And I click on the logout button
        Then I shoild be directed back to the login page
