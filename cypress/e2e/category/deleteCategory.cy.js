import LoginPage from "../../support/pages/LoginPage";
import CategoryPage from "../../support/pages/CategoryPage";

describe("SC01 - Delete kategori", () => {
  const env = Cypress.env("stage");

  beforeEach(() => {
    cy.visit(env);
    cy.fixture("users").then((data) => {
      LoginPage.login(data.validUser.email, data.validUser.password);
    });
  });

  it("TC01 - Hapus kategori", () => {
    CategoryPage.accessRouteCategory();
    CategoryPage.deleteCategory();
  });
});
