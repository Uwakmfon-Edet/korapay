const link_airtimetopup = ".mdl-navigation > :nth-child(7)";
const select_serviceProvider =
  "#mat-select-1 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder";
const select_MTN = "#mat-option-5";
const select_product =
  "#mat-select-2 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder";
const select_N100 = "#mat-option-8";
const btn_Next =
  ":nth-child(2) > .mat-dialog-actions > .row > .col-md-12 > .mat-raised-button";
const btn_Buy =
  "[style='padding-top: 30px'] > .mat-dialog-actions > .flex-row > .col-md-12 > .mat-raised-button";
const txt_OTP = "input[name = 'oneTimePassCode']";
const btn_verify =
  ".ng-untouched.ng-star-inserted > .mat-dialog-actions > .row > .col-md-12 > .mat-raised-button";
const txt_verifySuccess = ":nth-child(10) > strong";

class AirtimeToupPage {
  static clickAirtimeTopup() {
    cy.get(link_airtimetopup).click({ force: true });
  }
  static selectServiceProvider() {
    cy.wait(3000)
    cy.get(select_serviceProvider).click({ force: true });
    cy.get(select_MTN).click({ force: true });
  }
  static enterMobileNo() {
    cy.get(".mat-form-field-infix > input").first().type("08066291016");
  }
  static selectProduct() {
    cy.wait(3000)
    cy.get(select_product).click({ force: true });
    cy.get(select_N100).click({ force: true });
  }
  static clicknextButton() {
    cy.get(btn_Next).click({ force: true });
  }
  static clickBuyButton() {
    cy.get(btn_Buy).last().click({ force: true });
  }
  static enterOTP() {
    cy.get(txt_OTP).type("12345");
    cy.get(btn_verify).click({ force: true });
  }
  static verifySuccess() {
    cy.get(txt_verifySuccess).should("contain", "From");
  }
}
export default AirtimeToupPage;
