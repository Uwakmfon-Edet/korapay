import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "./LoginPage";

Given("I am on the Internet Banking Login page", () => {
  LoginPage.visit();
  cy.url().should("include", "login");
});

When('I input valid userID as {string} and Password ss {string}', (UserID, Password) => {
    LoginPage.fillUserID(UserID);
    LoginPage.fillPassword(Password);
  });

And("click the login button", () => {
  LoginPage.clickLogin();
});

Then("user should be navigated to the token page", () => {
  cy.get("h5").should("contain", "Welcome");
});

When("user enters token as {string} and validates", Token => {
  LoginPage.fillOTP(Token);
  LoginPage.submitOTP();
});

Then("user should be navigated to the dashboard", () => {
  cy.get("div").should("contain", "SAVINGS");
});
