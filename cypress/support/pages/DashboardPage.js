class DashboardPage {
  elements = {
    header: () => cy.get('div[class*="app_logo"]'),
  };

  verifyDashboard() {
    this.elements.header().should("contain", "Swag Labs");
  }
}

module.exports = new DashboardPage();
