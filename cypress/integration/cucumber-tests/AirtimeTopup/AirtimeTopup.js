import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../login/LoginPage";
import AirtimeToupPage from "./AirtimeToupPage";

Given(
  "I am on the internet banking dashboard after logging in with {string} and {string} and token as {string}",
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
  }
);

When("I click on the Airtime Topup menu and select service provider", () => {
  AirtimeToupPage.clickAirtimeTopup();
  AirtimeToupPage.selectServiceProvider();
});

And("enter phone numnber and subscription plan", () => {
  AirtimeToupPage.enterMobileNo();
  AirtimeToupPage.selectProduct();
  AirtimeToupPage.clicknextButton();
});

When("I verify the payment details", () => {
  AirtimeToupPage.clickBuyButton();
});

And("enter a valid OTP", () => {
  AirtimeToupPage.enterOTP();
});

Then("payment should be completed", () => {
  AirtimeToupPage.verifySuccess();
});
