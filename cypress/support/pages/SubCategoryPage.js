class SubCategoryPage {
  elements = {
    route: "https://staging-servicedesk.layanan.go.id/user/subkategori",
    btnAddSubCategory: 'button[data-bs-target*="create-kategori"]',
    fieldName: 'input[placeholder*="Masukan Nama"]',
    fieldDescription: 'textarea[placeholder*="Masukan Deskripsi"]',
    btnKirim:
      'button[class*="btn btn-sm btn-primary border border-primary px-10"]',
    btnPencil: 'button[class*="btn btn-sm btn-icon btn-warning"]',
    btnTrash: 'button[class*="btn btn-sm btn-icon btn-danger"]',
    btnYa: 'button[class*="swal2-confirm swal2-styled swal2-default-outline"]',
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

  deleteSubCategory() {
    cy.get(this.elements.btnTrash).eq(0).click();
    cy.get(this.elements.btnYa).click();
  }
}

module.exports = new SubCategoryPage();
