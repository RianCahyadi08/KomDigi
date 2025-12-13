class FormPage {
  elements = {
    route: "https://staging-servicedesk.layanan.go.id/user/form",
    btnAdd:
      'button[class*="d-flex btn btn-sm btn-primary align-items-center rounded-4"]',
    fieldDropDown:
      'div[class*="el-select__wrapper el-tooltip__trigger el-tooltip__trigger"]',
    fieldNameForm: 'input[placeholder*="Masukan Nama Form"]',
    fieldLabel: 'input[placeholder*="Masukan Label Field"]',
    fieldDiPerlukan: 'input[type*="checkbox"]',
    btnKirim:
      'button[class*="btn btn-sm btn-primary border border-primary px-10"]',
    // btnPencil: 'button[class*="btn btn-sm btn-icon btn-warning"]',
    // btnTrash: 'button[class*="btn btn-sm btn-icon btn-danger"]',
    // btnYa: 'button[class*="swal2-confirm swal2-styled swal2-default-outline"]',
  };

  accessAplikasiPage() {
    cy.visit(this.elements.route);
    cy.get('div[class*="card-title"]')
      .contains("Daftar Form")
      .should("be.visible");
  }

  createForm(name, label) {
    cy.get(this.elements.btnAdd).click();
    cy.get(".card-title").contains("Tambah Form").should("be.visible");
    cy.get(this.elements.fieldDropDown)
      .eq(0)
      .click()
      .type("{downarrow} {downarrow} {enter}");
    cy.wait(500);
    // Pilih kategori
    cy.realPress("Tab");
    cy.realPress("Enter");
    cy.realPress("ArrowDown");
    cy.realPress("Enter");
    cy.wait(500);
    // Pilih sub kategori
    cy.realPress("Tab");
    cy.realPress("Enter");
    cy.realPress("ArrowDown");
    cy.realPress("Enter");
    cy.wait(500);
    cy.get(this.elements.fieldNameForm).type(name).should("have.value", name);
    cy.wait(500);
    cy.get(this.elements.fieldLabel).type(label).should("have.value", label);
    // Pilih type
    cy.realPress("Tab");
    cy.realPress("Enter");
    cy.realPress("ArrowDown");
    cy.realPress("Enter");
    // Checkbox
    cy.get(this.elements.fieldDiPerlukan).check({ force: true });
    cy.get(this.elements.btnKirim).eq(1).click({ force: true });
  }
}

module.exports = new FormPage();
