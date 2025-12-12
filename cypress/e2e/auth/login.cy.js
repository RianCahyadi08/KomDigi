import LoginPage from "../../support/pages/LoginPage";

describe("User dihalaman login", () => {
  const env = Cypress.env("stage");

  beforeEach(() => {
    cy.visit(env);
  });

  it("Login with credential valid", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.validUser.email, data.validUser.password);
    });
  });
});
