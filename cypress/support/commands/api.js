Cypress.Commands.add("getToken", () => {
  return window.localStorage.getItem("token");
});
