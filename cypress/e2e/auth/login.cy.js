import LoginPage from "../../support/pages/LoginPage";
import DashboardPage from "../../support/pages/DashboardPage";

describe("Authentication - Login", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Login with valid credentials", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.validUser.email, data.validUser.password);
      cy.url().should("include", "/inventory.html");
      DashboardPage.verifyDashboard();
    });
  });
});
