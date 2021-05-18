Feature: Signup
     I want to be able to SignUp on the AlphaPay website

     Scenario: SignUp with valid credentials
          Given I ma on the AlphaPay landing page
          When I click on the button to Sign-up
          And I enter all valid inputs
          And click Create Account
          Then account should be created successfully
