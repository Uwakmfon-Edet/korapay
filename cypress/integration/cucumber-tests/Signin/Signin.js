import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import SigninPage from "./SigninPage";
import SignupPage from "../Signup/SignupPage";

Given("I ma on the AlphaPay landing page", () => {
  SignupPage.visit();
});

When("I click on the login button", () => {
  SigninPage.clickLogin();
});

And("I enter valid user credentials", () => {
  SigninPage.enterLogindetails();
});

Then("I should be directed to the user dashboard", () => {
  SignupPage.confirmDashboard();
});
