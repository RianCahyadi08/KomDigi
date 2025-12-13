import LoginPage from "../../support/pages/LoginPage";
import FormPage from "../../support/pages/FormPage";

describe("SC01 - Create form", () => {
  const env = Cypress.env("stage");

  beforeEach(() => {
    cy.visit(env);
    cy.fixture("users").then((data) => {
      LoginPage.login(data.validUser.email, data.validUser.password);
    });
  });

  it("TC01 - Tambah form", () => {
    FormPage.accessAplikasiPage();
    FormPage.createForm("name form", "name label");
  });

  it("TC02 - Tambah Form [Tipe Selected Box/Check Box]", () => {
    FormPage.accessAplikasiPage();
    FormPage.createForm("name form type box", "name label type box");
  });
});
