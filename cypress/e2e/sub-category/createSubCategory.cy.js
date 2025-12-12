import LoginPage from "../../support/pages/LoginPage";
import SubCategoryPage from "../../support/pages/SubCategoryPage";

describe("SC02 - Create sub kategori", () => {
  const env = Cypress.env("stage");

  beforeEach(() => {
    cy.visit(env);
    cy.fixture("users").then((data) => {
      LoginPage.login(data.validUser.email, data.validUser.password);
    });
  });

  it("TC01 - Tambah sub kategori", () => {
    SubCategoryPage.accessSubCategoryPage();
    SubCategoryPage.addSubCategory(
      "name sub category",
      "Lorem ipsum dolor sir amet"
    );
  });
});
