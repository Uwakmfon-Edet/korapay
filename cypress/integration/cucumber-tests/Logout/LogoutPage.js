const btn_logout = "[href='/coming-soon']";
const btn_loginButton = ".button";

class LogoutPage {
  static clickLogoutbutton() {
    cy.get(btn_logout).click({force : true});
  }
  static confirmLogout() {
    cy.get(btn_loginButton).should("be.visible");
  }
}
export default LogoutPage;
