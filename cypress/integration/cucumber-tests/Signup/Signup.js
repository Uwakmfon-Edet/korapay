import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import SignupPage from "./SignupPage";

Given("I ma on the AlphaPay landing page", () => {
  SignupPage.visit();
});

When("I click on the button to Sign-up", () => {
  SignupPage.clickSignup();
});
And("I enter all valid inputs", () => {
  SignupPage.enterFullName();
  SignupPage.enterUsername();
  SignupPage.enterPhoneNo();
  SignupPage.enterEmail();
  SignupPage.enterPasswords();
});
And("click Create Account", () => {
  SignupPage.clickCreateaccount();
});

Then("account should be created successfully", () => {
  SignupPage.confirmDashboard();
});
