import LoginPage from "../../support/pages/LoginPage";
import CategoryPage from "../../support/pages/CategoryPage";

describe("SC03 - Update kategori", () => {
  const env = Cypress.env("stage");

  beforeEach(() => {
    cy.visit(env);
    cy.fixture("users").then((data) => {
      LoginPage.login(data.validUser.email, data.validUser.password);
    });
  });

  it("TC01 - Edit kategori", () => {
    CategoryPage.accessRouteCategory();
    CategoryPage.updateCategory();
  });
});
