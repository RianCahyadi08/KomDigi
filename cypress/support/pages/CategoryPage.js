class CategoryPage {
  elements = {
    locatorRoute: () =>
      cy.visit("https://staging-servicedesk.layanan.go.id/user/kategori"),
    assertCategory: () =>
      cy.get(
        'h1[class*="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0"]'
      ),
    locatorSearch: () => cy.get('input[placeholder*="Cari Nama Kategori"]'),
    locatorSubCategory: () =>
      cy.get(
        'div[class*="text-center text-primary fw-bold fs-4 cursor-pointer"]'
      ),
    locatorModalSubCategory: () => cy.get('div[id*="modal-subcategory"]'),
    locatorbBtnAddCategory: () =>
      cy.get(
        'button[class*="d-flex btn btn-sm btn-primary align-items-center rounded-4"]'
      ),
    assertWordingAddCategory: () => cy.get('div[class="card-title"]'),
    locatorFieldNameCategory: () =>
      cy.get('input[placeholder*="Masukan Nama Kategori"]'),
    locatorFieldDescription: () =>
      cy.get('textarea[placeholder*="Masukan Deskripsi"]'),
    locatorFieldSubCategory: () =>
      cy.get('div[class*="el-select__selected-item el-select__placeholder"]'),
    locatorBtnKirim: () => cy.get('span[class="indicator-label"]').eq(2),
    assertSuccessCreate: () =>
      cy.get('button[class*="swal2-confirm btn fw-semibold btn-primary"]'),
    locatorThreeDots: () =>
      cy.get('i[class*="ki-solid ki-dots-vertical fs-1"]').eq(0),
    locatorDetail: () =>
      cy
        .get('div[class*="d-flex justify-content-between align-items-center"]')
        .contains("Detail"),
    locatorHapus: () => {
      cy.get(
        'a[class*="nav-link bg-hover-light-primary bg-active-light-primary pe-auto cursor-pointer text-hover-primary text-active-primary fw-normal text-gray-700 fs-base text-start"]'
      );
    },
    locatorYa: () => {
      cy.get(
        'button[class*="swal2-confirm swal2-styled swal2-default-outline"]'
      );
    },
  };

  accessRouteCategory() {
    this.elements.locatorRoute();
    this.elements.assertCategory().should("be.visible");
  }

  searchCategory(value) {
    this.elements.locatorSearch().type(value).should("have.value", value);
  }

  clickSubCategory() {
    this.elements.locatorSubCategory().eq(0).click();
    this.elements.locatorModalSubCategory().should("be.visible");
  }

  clickBtnAddCategory() {
    this.elements.locatorbBtnAddCategory().click();
    this.elements.assertWordingAddCategory().should("be.visible");
  }

  createCategory(name, description) {
    this.clickBtnAddCategory();
    this.elements
      .locatorFieldNameCategory()
      .click()
      .type(name)
      .should("have.value", name);
    this.elements
      .locatorFieldDescription()
      .click()
      .type(description)
      .should("have.value", description);
    this.elements
      .locatorFieldSubCategory()
      .click()
      .click()
      .type("{downarrow} {downarrow} {enter}");
    cy.wait(1000);
    // cy.get(
    //   'button[class*="btn btn-sm btn-primary border border-primary px-10"]'
    // )
    //   .eq(2)
    //   .click();
    // this.elements.locatorBtnKirim().click();
    // this.elements.assertSuccessCreate().should("be.visible");
  }

  clickThreeDots() {
    this.elements.locatorThreeDots().click();
  }

  clickDetail() {
    this.elements.locatorDetail().click();
  }

  updateCategory() {
    this.clickThreeDots();
    this.clickDetail();
    // this.elements.locatorBtnKirim().click();
    // this.elements.assertSuccessCreate().should("be.visible");
  }

  deleteCategory() {
    this.clickThreeDots();
    cy.get(
      'a[class*="nav-link bg-hover-light-primary bg-active-light-primary pe-auto cursor-pointer text-hover-primary text-active-primary fw-normal text-gray-700 fs-base text-start"]'
    )
      .eq(1)
      .click();
    cy.get(
      'button[class*="swal2-confirm swal2-styled swal2-default-outline"]'
    ).click();
    this.elements.assertSuccessCreate().should("be.visible");
  }
}

module.exports = new CategoryPage();
