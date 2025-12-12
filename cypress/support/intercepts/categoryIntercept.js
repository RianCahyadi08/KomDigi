export const interceptCategories = () => {
  cy.intercept("get", "api/parentCategories").as("fetchCategories");
};
