class LoginPage {
  elements = {
    username: () => cy.get("#user-name"),
    password: () => cy.get("#password"),
    submitBtn: () => cy.get("#login-button"),
  };

  visit() {
    cy.visit("/");
  }

  login(username, password) {
    this.elements.username().type(username);
    this.elements.password().type(password);
    this.elements.submitBtn().click();
  }
}

module.exports = new LoginPage();
