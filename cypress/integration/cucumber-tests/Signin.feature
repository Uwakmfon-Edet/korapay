Feature: Signin
    
    Scenario: Signin with valid credentials
    Given I ma on the AlphaPay landing page
    When I click on the login button
    And I enter valid user credentials
    Then I should be directed to the user dashboard
