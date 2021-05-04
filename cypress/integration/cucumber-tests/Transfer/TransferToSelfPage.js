const menu_expandTransfers =
  "#mat-select-0 > .mat-select-trigger > .mat-select-arrow-wrapper";
const link_transferToSelf = ".tran-links";
const select_fromAcct =
  "#mat-select-11 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder";
const select_DestAccount = "#destinationAccount";
const txt_amount = "#mat-input-9";
const txt_senderNarration = "#mat-input-10";
const txt_recpNarration = "#mat-input-11";
const btn_continue = "[style='margin-top: 25px;'] > .button-row > .mat-raised-button";
const chkbx_verifyPaymentDetails = ".mat-checkbox-inner-container"
const btn_vrifyContinue = "[style='padding-top: 30px'] > .button-row > .mat-raised-button"

class TransferToSelfPage {
  //This function is needed when the viewport width is lower and menu needs to be reveale
  static clickTransfersExpand() {
    cy.get(menu_expandTransfers).click({ force: true });
  }
  static clickTransferToSelf() {
    cy.contains("Transfer To Self").click({ force: true });
  }

  static selectSourceAcct() {
    cy.contains("From Account Number").click({ force: true });
    cy.get("#mat-option-9").click({ force: true });
  }
  static selectDestAcct() {
    cy.get(select_DestAccount).click({ force: true });
    cy.get("#mat-option-11").click({ force: true });
  }
  static fillAmount() {
    cy.get(txt_amount).type("500");
  }
  static fillNarrations() {
    cy.get(txt_senderNarration).type("test payment");
    cy.get(txt_recpNarration).type("test payment");
  }
  static clickContinueButton() {
    cy.get(btn_continue).click({force: true})
  }
  static verifyPayment(){
    cy.get(chkbx_verifyPaymentDetails).click({force: true})
    cy.get(btn_vrifyContinue).click({force: true})
    cy.get(':nth-child(14) > strong').should('contain', 'test')
    cy.log("Transfer to Self payment completed successfully");
  }
}
export default TransferToSelfPage;
