const menu_serviceRequest = ".mdl-navigation > :nth-child(13)";
const menu_requestForChequeBook = "";
const btn_submitChequeRequest =
  ".col-md-6 > form.ng-untouched > :nth-child(5) > .button-row > .mat-raised-button";
const menu_requestStatement = ".tab > :nth-child(2)";
const btn_requestStatement = ":nth-child(4) > .button-row > .mat-raised-button";
const menu_menuStopCheque = ".tab > :nth-child(4)";
const btn_stopChequeSend =
  "#cdk-step-content-2-0 > .row > .col-md-6 > :nth-child(1) > form.ng-untouched > :nth-child(5) > .button-row > .mat-raised-button";
const menu_submitCComplaint = ".tab > :nth-child(5)";
const btn_complaintSend =
  "#cdk-step-content-3-0 > .row > .col-md-6 > :nth-child(1) > form.ng-untouched > :nth-child(5) > .button-row > .mat-raised-button";
const menu_freezeAccount = ".tab > :nth-child(6)";
const btn_freezeAccountSend =
  ":nth-child(2) > .button-row > .mat-raised-button";
const menu_newCardRequest = ".tab > :nth-child(7)";
const btn_cardRequestSend = ":nth-child(6) > .button-row > .mat-raised-button";
const menu_hotlistCard = ".tab > :nth-child(8)";
const btn_hotlistCardSend =
  ":nth-child(2) > .col-md-12 > .button-row > .mat-raised-button";
const menu_modifyAccount = ".tab > :nth-child(9)";
const btn_modifyAcctSend =
  "form.ng-untouched > :nth-child(3) > .button-row > .mat-stroked-button";

/*
These elements are for the "Send Statement" functionality
*/

const menu_sendStatement = ".tab > :nth-child(3)";
const icon_FromCalender =
  ".row > :nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button > .mat-button-wrapper > .mat-datepicker-toggle-default-icon";
const calender_fromDay1 =
  ":nth-child(1) > .mat-calendar-body-cell > .mat-calendar-body-cell-content";
const icon_ToCalender =
  ":nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button > .mat-button-wrapper > .mat-datepicker-toggle-default-icon";
const calender_toActiveDate =
  ".mat-calendar-body-active > .mat-calendar-body-cell-content";
const select_country =
  "#mat-select-17 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder";
const select_Nigeria = "#mat-option-74";
const select_destinationType =
  "#mat-select-18 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder";
const select_Embassy = "#mat-option-49";
const select_destination =
  "#mat-select-19 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder";
const select_Canada = "#mat-option-527";
const select_applicantRole =
  "#mat-select-20 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder";
const select_Applicant = "#mat-option-50";
const txt_applicantName = "#mat-input-11"
const btn_continue =
  ".col-xs-12 > .row > .col-md-12 > .button-row > .mat-raised-button";
const btn_confirmContinue = "[style='padding-top: 30px'] > .button-row > .mat-raised-button";
// ".mat-raised-button mat-primary"
const btn_downloadReceipt =  ".mat-stroked-button";

class serviceRequestPages {
  static clickServiceRequestLink() {
    cy.get(menu_serviceRequest).click({ force: true });
  }

  static verifyChequebookRequest() {
    cy.get(btn_submitChequeRequest).should("be.visible");
  }
  static verifyStatementRequest() {
    cy.get(menu_requestStatement).click({ force: true });
    cy.get(btn_requestStatement).should("be.visible");
  }
  static verifyStopCheque() {
    cy.get(menu_menuStopCheque).click({ force: true });
    cy.get(btn_stopChequeSend).should("be.visible");
  }
  static verifySubmitCompalint() {
    cy.get(menu_submitCComplaint).click({ force: true });
    cy.get(btn_complaintSend).should("be.visible");
  }
  static verifyFreezeAccount() {
    cy.get(menu_freezeAccount).click({ force: true });
    cy.get(btn_freezeAccountSend).should("be.visible");
  }
  static verifySubmitNewCard() {
    cy.get(menu_newCardRequest).click({ force: true });
    cy.get(btn_cardRequestSend).should("be.visible");
  }
  static verifyHotlistCard() {
    cy.get(menu_hotlistCard).click({ force: true });
    cy.get(btn_hotlistCardSend).should("be.visible");
  }
  static verifyModifyAccount() {
    cy.get(menu_modifyAccount).click({ force: true });
    cy.get(btn_modifyAcctSend).should("be.visible");
  }

  static sendStatement() {
    cy.get(menu_sendStatement).click({ force: true });
    cy.get(icon_FromCalender).click({ force: true });
    cy.get(calender_fromDay1).click({ force: true });
    cy.get(icon_ToCalender).click({ force: true });
    cy.get(calender_toActiveDate).click({ force: true });
    cy.get(select_country)
      .wait(8000)
      .should("be.visible")
      .trigger("mouseover")
      .click({ force: true });
    cy.contains("Nigeria").click({ force: true });
    cy.get(select_destinationType)
      .wait(800)
      .should("be.visible")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(select_Embassy).click({ force: true });
    cy.get(select_destination)
      .wait(8000)
      .should("be.visible")
      .trigger("mouseover")
      .click({ force: true });
    cy.contains("Canada").click({ force: true });
    cy.wait(6000);
    cy.get(select_applicantRole)
      .should("be.visible")
      .trigger("mouseover")
      .click({ force: true });
    cy.get(select_Applicant).click({ force: true });
    cy.get(txt_applicantName).type("Uwakmfon Edet");
    cy.get(btn_continue).click({ force: true });
    cy.get(btn_confirmContinue).should("be.visible");
 //   cy.get(btn_downloadReceipt).should("be.visible");
    cy.log('Account Statement has been sent successfully')
  }
}
export default serviceRequestPages;
