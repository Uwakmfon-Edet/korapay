import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../login/LoginPage";
import serviceRequestPages from "./serviceRequestPages";

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

When("User clicks on the Service Request Menu", () => {
  serviceRequestPages.clickServiceRequestLink();
});
When("User can verify Request for Cheque Book", () => {
  serviceRequestPages.verifyChequebookRequest();
});
When("user can verify Statement RequestA", () => {
  serviceRequestPages.verifyStatementRequest();
});
When("user can confirm Send Statement functionality", () => {
    serviceRequestPages.sendStatement()
});
When("user can Submit a Complaint", () => {
  serviceRequestPages.verifySubmitCompalint();
});
When("User can Put a freeze on an account", () => {
  serviceRequestPages.verifyFreezeAccount();
});
When("user can Request for a new card", () => {
  serviceRequestPages.verifySubmitNewCard();
});
When("user can Hotlist card", () => {
  serviceRequestPages.verifyHotlistCard();
});
When("User should try the Modify account functionality", () => {
  serviceRequestPages.verifyModifyAccount();
});
