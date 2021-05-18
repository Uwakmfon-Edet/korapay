const URL = "https://80.248.0.83:3443/#/auth/login";
const btn_login = "a > .btn";
const txt_email = ":nth-child(1) > input";
const txt_password = ".password";
const btn_loginButton = ".button";

class SigninPage {
  static visit() {
    cy.visit(URL);
  }
  static clickLogin() {
    cy.get(btn_login).click();
  }
  static enterLogindetails() {
    cy.get(txt_email).type("korapaytest@qa.team");
    cy.get(txt_password).type("Test123@4");
    cy.get(btn_loginButton).click();
  }
  static enterLginDetailsPasswordChange(){
    cy.get(txt_email).type("korapaytest_pass@qa.team");
    cy.get(txt_password).type("Test123@4");
    cy.get(btn_loginButton).click();
  }
}
export default SigninPage;
