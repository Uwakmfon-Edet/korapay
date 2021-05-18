Feature: ChangePassword

    Scenario: Change Password
        Given I am logged into the appliocation
        When I click on the prfile nav icon
        And I click the Security Menu
        And I enter old and new passwords
        Then password should be changed successfully