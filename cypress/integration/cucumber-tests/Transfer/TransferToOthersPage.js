const menu_hamburger = "#mdl-layout__header-row > :nth-child(1)";
const link_transfers = "#mdl-layout__drawer > .mdl-navigation > :nth-child(3)";
const select_FromAcct =
  "#mat-select-7 > .mat-select-trigger > .mat-select-value";

const txt_DestAccount = "input[name='destAccountNo']";
const txt_Amount = "input[name='amount']";
const select_DestBank = ".mat-select-placeholder";
const select_zenothBank = "#mat-option-256 > .mat-option-text";
//"#mat-option-264 > .mat-option-text";
const txt_RecpName = "input[name='beneficiaryName']";
const txt_SenderNarration = "input[name='benenficiaryRef']";
const txt_RecpNarration = "input[name='senderRef']";
const btn_Continue = ".col-md-8 > .mat-raised-button";
const AccuntHolderName = ":nth-child(1) > .col-md-12 > strong";
const chkbx_verify = "#mat-checkbox-1-input";
const btn_vefContinue =
  "#mat-dialog-0 > .ng-star-inserted > .mat-dialog-actions > .row > .col-md-12 > .mat-raised-button";
const txt_OTP = "input[name='oneTimePassCode']";
const btn_OTPVerify = ".col-md-12 > .mat-raised-button.mat-primary";
const confirm_senderNarration = ":nth-child(14) > strong";

class TransferToOthersPage {
  //This function is needed when the viewport width is lower and menu needs to be revealed
  static clickHamburger() {
    cy.get(menu_hamburger).click();
  }
  static clickTransferToOthersLink() {
    cy.get(link_transfers).click();
  }
  static verifyFromAccount() {
    cy.get(select_FromAcct).should("contain", "Available Bal");
  }
  static fillrecpAcctNo(AccountNumber) {
    cy.get(txt_DestAccount).type(AccountNumber);
  }
  static fillAmount(Amount) {
    cy.get(txt_Amount).type(Amount);
  }
  static selectDestBank() {
    cy.wait(10000);
    cy.get(select_DestBank)
      .should("be.visible")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(".mat-option-text").contains("Zenith Bank").click();
  }
  static fillRecpName(RecipientName) {
    cy.get(txt_RecpName).type(RecipientName);
  }
  static fillNarration(Narration) {
    cy.get(txt_SenderNarration).type(Narration);
    cy.get(txt_RecpNarration).type(Narration);
  }
  static clickContinue() {
    cy.get(btn_Continue).click();
  }
  static confirmPaymentDetails() {
    cy.get(AccuntHolderName).should("contain", "HABIBA GIMBIYA");
    cy.get(chkbx_verify).click({ force: true });
    cy.get(btn_vefContinue).click({ force: true });
  }
  static fillOTP() {
    cy.get(txt_OTP).type("12345");
    cy.get(btn_OTPVerify).click();
  }
  static confirmPaymentStatus() {
    cy.get(confirm_senderNarration).should("contain", "Test payment");
    cy.log("Transfer to Others payment completed successfully");
  }
}
export default TransferToOthersPage;
