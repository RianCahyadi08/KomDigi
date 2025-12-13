class AplikasiPage {
  elements = {
    route: "https://staging-servicedesk.layanan.go.id/user/aplikasi",
    btnAddAplikasi:
      'button[class*="d-flex btn btn-sm btn-primary align-items-center rounded-4"]',
    fieldDropDown:
      'div[class*="el-select__selected-item el-select__placeholder is-transparent"]',
    fieldNameAplikasi: 'input[placeholder*="Masukan Nama Aplikasi"]',
    fieldUploadGambar: 'input[type="file"]',
    fieldDescription: 'textarea[placeholder*="Masukan Deskripsi Aplikasi"]',
    btnKirim:
      'button[class*="btn btn-sm btn-primary border border-primary px-10"]',
    btnPencil: 'button[class*="btn btn-sm btn-icon btn-warning"]',
    // btnTrash: 'button[class*="btn btn-sm btn-icon btn-danger"]',
    // btnYa: 'button[class*="swal2-confirm swal2-styled swal2-default-outline"]',
  };

  accessAplikasiPage() {
    cy.visit(this.elements.route);
    cy.get('div[class*="card-title"]')
      .contains("Daftar Aplikasi")
      .should("be.visible");
  }

  createAplikasi(name, description) {
    cy.get(this.elements.btnAddAplikasi).click();
    cy.get(this.elements.fieldDropDown)
      .eq(0)
      .click()
      .type("{downarrow} {downarrow} {enter}");
    cy.get(this.elements.fieldNameAplikasi)
      .type(name)
      .should("have.value", name);
    cy.get(this.elements.fieldUploadGambar)
      .eq(0)
      .selectFile("cypress/fixtures/images.jpg");
    cy.get(this.elements.fieldDescription)
      .type(description)
      .should("have.value", description);
    cy.get(this.elements.fieldDropDown)
      .eq(0)
      .click()
      .type("{downarrow} {downarrow} {enter}");
    cy.get(this.elements.fieldDropDown)
      .eq(0)
      .click()
      .type("{downarrow} {downarrow} {enter}");
    cy.get(this.elements.fieldDropDown)
      .eq(0)
      .click()
      .type("{downarrow} {downarrow} {enter}");
    cy.get(this.elements.btnKirim).eq(2).click();
  }

  updateAplikasi() {
    cy.get(this.elements.btnPencil).eq(0).click();
    cy.get('div[class*="card-title"]')
      .contains("Detail Aplikasi")
      .should("be.visible");
    cy.get(this.elements.btnKirim).eq(2).click();
  }
}

module.exports = new AplikasiPage();
