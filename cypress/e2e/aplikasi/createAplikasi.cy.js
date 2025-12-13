import LoginPage from "../../support/pages/LoginPage";
import AplikasiPage from "../../support/pages/AplikasiPage";

describe("SC01 - Create aplikasi", () => {
  const env = Cypress.env("stage");

  beforeEach(() => {
    cy.visit(env);
    cy.fixture("users").then((data) => {
      LoginPage.login(data.validUser.email, data.validUser.password);
    });
  });

  it("TC01 - Tambah aplikasi", () => {
    AplikasiPage.accessAplikasiPage();
    AplikasiPage.createAplikasi(
      "name application",
      "lorem ipsum dolor sir amet"
    );
  });
});
