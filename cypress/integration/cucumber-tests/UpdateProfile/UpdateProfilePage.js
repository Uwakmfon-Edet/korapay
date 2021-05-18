const icon_profileNav = ".dashboard_nav_profile";
const txt_fullName = "form > :nth-child(1) > input";
const txt_userName = ":nth-child(2) > input";
const btn_updateDetails = "form > .button";
const flash_updateSuccess = ".go1415219401";
var rabdomNumber = Math.floor(Math.random() * 101);

class UpdateProfilePage {
  static clickProfileNav() {
    cy.get(icon_profileNav).click();
  }
  static updateDetails() {
    cy.get(txt_fullName).clear();
    cy.get(txt_fullName).type("Korapay Test" + rabdomNumber);
    cy.get(txt_userName).clear();
    cy.get(txt_userName).type("KorapayTester" + rabdomNumber);
    cy.get(btn_updateDetails).click();
  }
  static confirmUpdate() {
    cy.get(flash_updateSuccess).should('be.visible')
  }
}
export default UpdateProfilePage;
