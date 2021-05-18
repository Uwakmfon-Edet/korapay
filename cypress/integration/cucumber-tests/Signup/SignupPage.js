const URL = "https://alphapay.netlify.app/";
const link_SignUp = ".nav_item > a";
const txt_fullName = ".react-reveal > :nth-child(1) > div > input";
const txt_userName = ":nth-child(2) > input";
const txt_phoneNumber = ":nth-child(3) > input";
const txt_email = ":nth-child(4) > input";
const txt_password = ":nth-child(5) > input";
const txt_confirmPassword = ":nth-child(6) > input";
const btn_createAccount = ".button";
const icon_dashboardProfile = ".dashboard_nav_profile";
var rabdomNumber = Math.floor(Math.random() * 101);
var email = "korapayTest" + rabdomNumber + "@qa.team";

class SignupPage {
  static visit() {
    cy.visit(URL);
  }
  static clickSignup(){
      cy.get(link_SignUp).click()
  }
  static enterFullName() {
    cy.get(txt_fullName).type("Tester Test");
  }
  static enterUsername() {
    cy.get(txt_userName).type("testUsername"+ rabdomNumber);
  }
  static enterPhoneNo() {
    cy.get(txt_phoneNumber).type("0708366765" + rabdomNumber);
  }
  static enterEmail() {
    cy.get(txt_email).type(email);
  }
  static enterPasswords() {
    cy.get(txt_password).type("Test123@4");
    cy.get(txt_confirmPassword).type("Test123@4");
  }
  static clickCreateaccount(){
    cy.get(btn_createAccount).click({force:true})
  }
  static confirmDashboard(){
    cy.get(icon_dashboardProfile).should('be.visible')
  }
}
export default SignupPage;
