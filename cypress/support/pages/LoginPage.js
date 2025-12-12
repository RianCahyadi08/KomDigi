class LoginPage {
  elements = {
    username: () => cy.get('input[placeholder*="Email"]'),
    password: () => cy.get('input[placeholder*="Password"]'),
    submitBtn: () =>
      cy.get('button[class*="btn btn-lg btn-primary w-100 mb-5"]'),
    assertDashboard: () =>
      cy.get(
        'h1[class*="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0"]'
      ),
  };

  login(username, password) {
    this.elements.username().type(username);
    this.elements.password().type(password);
    this.elements.submitBtn().click();
    this.elements.assertDashboard().should("be.visible");
  }
}

module.exports = new LoginPage();
