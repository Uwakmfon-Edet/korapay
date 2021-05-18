const btn_securiy = "[href='/dashboard/settings/security']";
const txt_oldPassword = ".old_password_form > input";
const txt_newPassword = ".new_password_form > input";
const btn_changePassword =
  ".password_security_change > form > .btn_cont > .button";
const flash_confirmChangepassword = ".go1415219401";
const btn_profile = "[href='/dashboard/settings/profile']"

class ChangePasswordPage {
  static clickSecurity() {
    cy.get(btn_securiy).click({ force: true });
  }
  static enterPasswordDetails() {
    cy.get(txt_oldPassword).type("Test123@4");
    cy.get(txt_newPassword).type("Test123@41");
    cy.get(btn_changePassword).click({ force: true });
  }
  static confirmPasswordChange() {
    cy.get(flash_confirmChangepassword).should("be.visible");
  }
  static revertPassword() {
    cy.get(btn_profile).click({ force: true });
    cy.get(btn_securiy).click({ force: true });
    cy.get(txt_oldPassword).type("Test123@41");
    cy.get(txt_newPassword).type("Test123@4");
    cy.get(btn_changePassword).click({ force: true });
    cy.get(flash_confirmChangepassword).should("be.visible");
  }
}
export default ChangePasswordPage;
