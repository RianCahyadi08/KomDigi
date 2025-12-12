class SubCategoryPage {
  elements = {
    route: "https://staging-servicedesk.layanan.go.id/user/subkategori",
    btnAddSubCategory: 'button[data-bs-target*="create-kategori"]',
    fieldName: 'input[placeholder*="Masukan Nama"]',
    fieldDescription: 'textarea[placeholder*="Masukan Deskripsi"]',
    btnKirim:
      'button[class*="btn btn-sm btn-primary border border-primary px-10"]',
    btnPencil: 'button[class*="btn btn-sm btn-icon btn-warning"]',
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

  addSubCategory(name, description) {
    cy.get(this.elements.btnAddSubCategory).click();
    cy.get(this.elements.fieldName).should("be.visible");
    cy.get(this.elements.fieldName).type(name).should("have.value", name);
    cy.get(this.elements.fieldDescription)
      .type(description)
      .should("have.value", description);
    cy.get(this.elements.btnKirim).eq(2).click();
  }

  updateSubCategory() {
    cy.get(this.elements.btnPencil).eq(0).click();
    cy.get(this.elements.btnKirim).eq(3).click();
  }
}

module.exports = new SubCategoryPage();
