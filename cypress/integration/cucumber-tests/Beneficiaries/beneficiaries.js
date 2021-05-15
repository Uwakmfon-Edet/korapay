import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../login/LoginPage";
import beneficiariesPage from "./beneficiariesPage";

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

When("I click on the Beneficiaries menu", () => {
  beneficiariesPage.clickBeneficiariesLink();
});
Then("I should be able to delete beneficiary", () => {
  beneficiariesPage.verifyHamburger();
});
When("I click on Add Beneficiary menu", () => {
  beneficiariesPage.clickAddBeneficiary();
});
Then("I should be able to Add a beneficiary", () => {
  beneficiariesPage.verifyAddBeneficiary();
});
