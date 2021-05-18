import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import SigninPage from "../Signin/SigninPage";
import SignupPage from "../Signup/SignupPage";
import UpdateProfilePage from "./UpdateProfilePage"

Given( "I am logged into the appliocation",()=> {
  SignupPage.visit();
  SigninPage.clickLogin();
  SigninPage.enterLogindetails();
  SignupPage.confirmDashboard();
});

When("I click on the prfile nav icon", () => {
  UpdateProfilePage.clickProfileNav()
});

And("update the username and fullname inputs", () => {
  UpdateProfilePage.updateDetails()
});

Then("the details should be updated successfully",() => {
  UpdateProfilePage.confirmUpdate()
  });

