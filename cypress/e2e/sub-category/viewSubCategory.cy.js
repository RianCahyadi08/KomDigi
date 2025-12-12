import LoginPage from "../../support/pages/LoginPage";
import SubCategoryPage from "../../support/pages/SubCategoryPage";

describe("SC01 - View halaman sub kategori", () => {
  const env = Cypress.env("stage");

  beforeEach(() => {
    cy.visit(env);
    cy.fixture("users").then((data) => {
      LoginPage.login(data.validUser.email, data.validUser.password);
    });
  });

  it("TC01 - View halaman sub kategori", () => {
    SubCategoryPage.accessSubCategoryPage();
  });

  it("TC02 - Search sub kategori", () => {
    SubCategoryPage.accessSubCategoryPage();
    cy.intercept("get", "api/categories").as("fetchSubCategories");
    cy.wait("@fetchSubCategories").then((res) => {
      SubCategoryPage.search(res.response.body.data.data[0].category_name);
    });
  });
});
