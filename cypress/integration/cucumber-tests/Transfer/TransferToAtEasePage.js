const txt_amount = "input[name = 'amount']";
const txt_walletAcctNumber = "input[name = 'destAccountNo']";
const txt_senderNarration =   "input[name = 'senderRef']"
const txt_recpNarration = "input[name = 'benenficiaryRef']";
const btn_continue = ".col-md-8 > .mat-raised-button";
const chckbx_verifyPament = ".mat-checkbox-inner-container";
const btn_verifyContinue =
  "#mat-dialog-0 > .ng-star-inserted > .mat-dialog-actions > .row > .col-md-12 > .mat-raised-button";
const txt_tokenInput ="input[name = 'oneTimePassCode']";
const btn_verifyOTP = ".col-md-12 > .mat-raised-button.mat-primary";
const txt_verifySentNarration = ":nth-child(14) > strong";

class TransferToAtEasePage {
  static clickTransferToAtEase() {
    cy.contains("Transfer To @Ease Account").click({ force: true });
  }

  static fillAmount() {
    cy.get(txt_amount).type("200");
  }
  static fillWalletAcctNumber() {
    cy.get(txt_walletAcctNumber).type("8066291016");
  }
  static fillNarration() {
    cy.get(txt_senderNarration).type("Test payment");
    cy.get(txt_recpNarration).type("Test Payment");
  }
  static clickContinue() {
    cy.get(btn_continue).click();
  }
  static verifyPaymentDetails() {
    cy.get(chckbx_verifyPament).click({ force: true });
    cy.get(btn_verifyContinue).click({ force: true });
  }

  static verifyOTP() {
    cy.get(txt_tokenInput).type("12345");
    cy.get('button').contains('Verify').click({ force: true });
  }

  static completeTransaction() {
    cy.get(txt_verifySentNarration).should("contain", "Test");
    cy.log("Transfer to @Ease payment completed successfully");
  }
}
export default TransferToAtEasePage;