import LoginPage from "../../support/pages/LoginPage";
import AplikasiPage from "../../support/pages/AplikasiPage";

describe("SC02 - Update aplikasi", () => {
  const env = Cypress.env("stage");

  beforeEach(() => {
    cy.visit(env);
    cy.fixture("users").then((data) => {
      LoginPage.login(data.validUser.email, data.validUser.password);
    });
  });

  it("TC01 - Edit aplikasi", () => {
    AplikasiPage.accessAplikasiPage();
    AplikasiPage.updateAplikasi();
  });
});
