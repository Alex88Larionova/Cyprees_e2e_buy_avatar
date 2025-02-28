import * as data from "../helpers/default_data.json";
import * as auth from "../locators/auth_page.json";

describe("Проверка авторизации", function () {
  it("Верный пароль и верный логин", function () {
    cy.visit("/");
    cy.get(auth.login).type(data.login);
    cy.get(auth.password).type(data.password);
    cy.get(auth.btn).click();
    cy.get(".header__id-texts").click();
    cy.get("[href='/shop']").click();
    cy.get(".available > button").first().click({ force: true });
    cy.get(".pay__payform-v2 > :nth-child(2) > .pay_base-input-v2").type(
      data.card_number
    );
    cy.get(":nth-child(1) > .pay_base-input-v2").type(data.date);
    cy.get(".pay-inputs-box > :nth-child(2) > .pay_base-input-v2").type(
      data.CVV
    );
    cy.get(".pay__input-box-last-of > .pay_base-input-v2").type(data.name);
    cy.get(".pay-btn").click();
    cy.get("#cardnumber").type(data.sms);
    cy.get(".payment__submit-button").click();
    cy.contains("Покупка прошла успешно").should("be.visible");
  });
});
