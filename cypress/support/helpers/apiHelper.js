export const loginAPI = (email, password) => {
  return cy.request("POST", "/api/login", { email, password });
};
