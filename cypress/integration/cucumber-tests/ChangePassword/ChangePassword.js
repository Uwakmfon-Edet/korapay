import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import SigninPage from "../Signin/SigninPage";
import SignupPage from "../Signup/SignupPage";
import UpdateProfilePage from "../UpdateProfile/UpdateProfilePage";
import ChangePasswordPage from "./ChangePasswordPage";

Given("I am logged into the appliocation", () => {
  SignupPage.visit();
  SigninPage.clickLogin();
  SigninPage.enterLginDetailsPasswordChange();
  SignupPage.confirmDashboard();
});

When("I click on the prfile nav icon", () => {
  UpdateProfilePage.clickProfileNav();
});

And("I click the Security Menu", () => {
  ChangePasswordPage.clickSecurity();
});

And("I enter old and new passwords", () => {
  ChangePasswordPage.enterPasswordDetails();
});
Then("password should be changed successfully", () => {
  ChangePasswordPage.confirmPasswordChange();
  //This function reverts the password to the default one used during login
  ChangePasswordPage.revertPassword();
});
