const URL = "https://80.248.0.83:3443/#/auth/login";
const txt_UserID = "#txtusername";
const txt_password = "#txtpassword";
const btn_Login = ".mat-raised-button";
const txt_token = "#txtpassCode";
const btn_TokenSubmit = ".mat-raised-button";

class LoginPage {
  static visit() {
     cy.visit(URL);
  }
  static fillUserID(userID) {
    cy.get(txt_UserID).type(userID);
  }
  static fillPassword(password) {
    cy.get(txt_password).type(password);
  }
  static clickLogin() {
    cy.get(btn_Login).click();
  }
  static fillOTP(OTP) {
    cy.get(txt_token).type(OTP);
  }
  static submitOTP() {
    cy.get(btn_TokenSubmit).click();
  }
}
export default LoginPage;
