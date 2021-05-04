import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../login/LoginPage";
import TransferToOthersPage from "./TransferToOthersPage";
import TransferToSelfPage from "./TransferToSelfPage";
import TransferToAtEasePage from "./TransferToAtEasePage";

Given(
  "I am on the dashboard aftdr logging in with {string} and {string} and token as {string}",
  (UserID, Password, Token) => {
    LoginPage.visit();
    cy.url().should("include", "login");
    LoginPage.fillUserID(UserID);
    LoginPage.fillPassword(Password);
    LoginPage.clickLogin();
    cy.get("h5").should("contain", "Welcome");
    LoginPage.fillOTP(Token);
    LoginPage.submitOTP();
    cy.get("div").should("contain", "SAVINGS");
    //  TransferToOthersPage.clickHamburger();
  }
);

When("I click the transfers link", () => {
  TransferToOthersPage.clickTransferToOthersLink();
});

And("select sourceAccount", () => {
  TransferToOthersPage.verifyFromAccount;
});

And(
  "enter amount as {string} then recpAccountNo as {string}",
  (Amount, AccountNumber) => {
    TransferToOthersPage.fillAmount(Amount);
    TransferToOthersPage.fillrecpAcctNo(AccountNumber);
  }
);

And("selects destinationBank with recpName as {string}", (RecipientName) => {
  TransferToOthersPage.selectDestBank();
  TransferToOthersPage.fillRecpName(RecipientName);
});
And("enter narrations as {string}", (Narration) => {
  TransferToOthersPage.fillNarration(Narration);
});
And("clicks continue button", () => {
  TransferToOthersPage.clickContinue();
});
Then("the confirm payments details should be displayed", () => {
  TransferToOthersPage.confirmPaymentDetails();
});
When("user confirms payment and enters OTP", () => {
  TransferToOthersPage.fillOTP();
});
Then("transfer should be processed successfully", () => {
  TransferToOthersPage.confirmPaymentStatus();
});

// These steps caters for transfer to Self functionalities

And("click transfer to self", () => {
  // TransferToSelfPage.clickTransfersExpand();
  TransferToSelfPage.clickTransferToSelf();
});
And("selects source and destination recpAccountNo", () => {
  TransferToSelfPage.selectSourceAcct();
  TransferToSelfPage.selectDestAcct();
});
And("enters amount and narrationsand clicks continue", () => {
  TransferToSelfPage.fillAmount();
  TransferToSelfPage.fillNarrations();
  TransferToSelfPage.clickContinueButton();
});
Then(
  "user should verify payment details and payment should be processed",
  () => {
    TransferToSelfPage.verifyPayment();
  }
);

// These steps caters for Transfer to @Ease Account functionalities
And("click on transfer to atEase Account", () => {
  TransferToAtEasePage.clickTransferToAtEase();
});
And("enters amonut, account number and narrations", () => {
  TransferToAtEasePage.fillAmount();
  TransferToAtEasePage.fillWalletAcctNumber();
  TransferToAtEasePage.fillNarration();
});
And("clicks continue", () => {
  TransferToAtEasePage.clickContinue();
});
Then("user shoule be able to verify transfer details and enter OTP", () => {
  TransferToAtEasePage.verifyPaymentDetails();
  TransferToAtEasePage.verifyOTP();
});
And("complete transfer transaction", () => {
  TransferToAtEasePage.completeTransaction();
});
