const menu_beneficiaries =
  "#mdl-layout__drawer > .mdl-navigation > :nth-child(5)";
const hamburger = ":nth-child(1) > :nth-child(6) > .mat-icon-button";
const meenu_remove = ".mat-menu-content > :nth-child(3)";
const btn_yesContinue = "[style=''] > .button-row > .mat-raised-button";
const txt_OTP = "input[name = 'oneTimePassCode']";
const btn_verify = ":nth-child(3) > .mat-raised-button";
const flash_confirmDelete = ".sn-content";
// This varaibale holds 'Add Beneficiary' elements
const select_Bank = "mat-select-placeholder"
const select_Gtbank = "#mat-option-984";
const txt_acctNumber = "input [name = 'accountNo']";
const txt_beneficiaryName = "input [name = 'beneficiaryName']";
const txt_recpNarration = "input [name = 'benenficiaryRef']";
const txt_senderNarration = "input [name = 'senderRef']";
const btn_Continue =
  ".col-md-8 > form.ng-valid > [style='width: 100%; display:flex; align-items:center;padding-top: 25px;'] > .button-row > .mat-raised-button";
const btn_addBeneficiary = ".mat-dialog-actions > .mat-raised-button";
const btn_verifyOTP =
  ".ng-untouched.ng-star-inserted > [style='width: 100%; display:flex; align-items:center;padding-top: 25px;'] > .button-row > .mat-raised-button.mat-primary";

class beneficiariesPage {
  static clickBeneficiariesLink() {
    cy.get(menu_beneficiaries).click({ force: true });
  }
  static verifyHamburger(){
    cy.get(hamburger).should ('be.visible')
  }
  static verifyAddBeneficiary(){
    cy.get(btn_Continue).should ('be.visible')
  }
  static clickHamburger() {
    cy.get(hamburger).click({ force: true });
  }
  static selectRemove() {
    cy.get(meenu_remove).click({ force: true });
  }
  static confirmDelete() {
    cy.get(btn_yesContinue).click({ force: true });
  }
  static enterOTP() {
    cy.get(txt_OTP).last().type("12345");
    cy.get(btn_verify).click({ force: true });
  }
  static confirmDeleteSuccess() {
    cy.get(flash_confirmDelete).should("be.visible");
  }

  //These functions cater for 'Add Beneficiary' Functionalities
  static clickAddBeneficiary(){
      cy.contains(' Add Beneficiary ').click({ force: true })
  }
  static addBeneficiaryDetails(){
      cy.get(txt_acctNumber).type('0157612595')
      cy.get(select_Bank).click({ force: true })
      cy.get(select_Gtbank).click({ force: true })
      cy.get(txt_beneficiaryName).type('EDET UWAKMFON')
      cy.get(txt_recpNarration).type('Test Beneficiary')
      cy.get(txt_senderNarration).type('Test Beneficiary')
      cy.get(btn_Continue).click({ force: true })
  }
}
export default beneficiariesPage;
