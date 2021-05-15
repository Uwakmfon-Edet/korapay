Feature: Trnasfers
    I want to be able to execute all the transfer functionalities

    Background: Login to Internet banking
        Given I am on the dashboard after logging in with "0033518069" and "Test12345@6" and token as "12345"
        When I click the transfers link

    Scenario: Transfer to Others
        And select sourceAccount
        And enter amount as '500' then recpAccountNo as '2000060426'
        And selects destinationBank with recpName as 'Mfon'
        And enter narrations as 'Test payment'
        And clicks continue button
        Then the confirm payments details should be displayed
        When user confirms payment and enters OTP
        Then transfer should be processed successfully

    Scenario: Transfer to Self
        And click transfer to self
        And selects source and destination recpAccountNo
        And enters amount and narrationsand clicks continue
        Then user should verify payment details and payment should be processed

    Scenario: Transfer to @Ease Account
        And click on transfer to atEase Account
        And enters amonut, account number and narrations
        And clicks continue
        Then user shoule be able to verify transfer details and enter OTP
        And complete transfer transaction

    # Scenario: Pay Beneficiaries
    # This functionality is currently not working in UAT

    # Scenario: Fund prepaid 
    # This functionality is currently not working in UAT