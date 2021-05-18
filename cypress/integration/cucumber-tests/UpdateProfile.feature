Feature: UpdateProfile

Scenario: Update profile Fullname and Username
Given I am logged into the appliocation
When I click on the prfile nav icon
And update the username and fullname inputs
Then the details should be updated successfully