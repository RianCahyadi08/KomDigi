Cypress.Commands.add("loginAPI", (email, password) => {
  cy.request("POST", "/api/login", { email, password }).then((res) => {
    window.localStorage.setItem("token", res.body.token);
  });
});
