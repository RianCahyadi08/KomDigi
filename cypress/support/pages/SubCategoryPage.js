class SubCategoryPage {
  elements = {
    route: "https://staging-servicedesk.layanan.go.id/user/subkategori",
  };

  accessSubCategoryPage() {
    cy.visit(this.elements.route);
    cy.get('div[class*="card-title"]')
      .contains("Daftar Subkategori Layanan")
      .should("be.visible");
  }

  search(value) {
    cy.get('input[placeholder*="Cari Nama Subkategori"]')
      .type(value)
      .should("have.value", value);
  }
}

module.exports = new SubCategoryPage();
