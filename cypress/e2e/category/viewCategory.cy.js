import LoginPage from "../../support/pages/LoginPage";
import CategoryPage from "../../support/pages/CategoryPage";
import { interceptCategories } from "../../support/intercepts/categoryIntercept";

describe("SC01 - View halaman kategori", () => {
  const env = Cypress.env("stage");

  beforeEach(() => {
    cy.visit(env);
    cy.fixture("users").then((data) => {
      LoginPage.login(data.validUser.email, data.validUser.password);
    });
  });

  it("TC01 - View halaman kategori", () => {
    CategoryPage.accessRouteCategory();
  });

  it("TC02 - Search kategori", () => {
    interceptCategories();
    CategoryPage.accessRouteCategory();
    cy.wait("@fetchCategories").then((res) => {
      CategoryPage.searchCategory(res.response.body.data.data[0].name);
    });
  });

  it("TC03 - View Daftar Sub kategori pada Kategori", () => {
    CategoryPage.accessRouteCategory();
    CategoryPage.clickSubCategory();
  });
});
