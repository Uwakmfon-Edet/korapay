import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import SigninPage from "../Signin/SigninPage";
import SignupPage from "../Signup/SignupPage";
import UpdateProfilePage from "../UpdateProfile/UpdateProfilePage";
import LogoutPage from "./LogoutPage";

Given("I am logged into the appliocation", () => {
  SignupPage.visit();
  SigninPage.clickLogin();
  SigninPage.enterLogindetails();
  SignupPage.confirmDashboard();
});
When("I click on the prfile nav icon", () => {
  UpdateProfilePage.clickProfileNav();
});
Then("I click on the logout button", () => {
  LogoutPage.clickLogoutbutton();
});
When("I shoild be directed back to the login page", () => {
  LogoutPage.confirmLogout();
});
