import LoginPage from "../../support/pages/LoginPage";
import CategoryPage from "../../support/pages/CategoryPage";

describe("SC02 - Create kategori", () => {
  const env = Cypress.env("stage");

  beforeEach(() => {
    cy.visit(env);
    cy.fixture("users").then((data) => {
      LoginPage.login(data.validUser.email, data.validUser.password);
    });
  });

  it("TC01 - Tambah kategori", () => {
    CategoryPage.accessRouteCategory();
    CategoryPage.createCategory("name category", "lorem ipsum dolor sir amet");
  });
});
