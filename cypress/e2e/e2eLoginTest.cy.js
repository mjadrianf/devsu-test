describe('Prueba E2E desde Login hasta compra de Producto', () => {

  beforeEach(() => {
    cy.visit('');
});

it('Test E2E for standar user - Login and addOK', () => {
   
  cy.fixture('data.json').then((userData) => {
      cy.loginPage(userData.estandar_user, userData.common_pass)
      cy.get('.title').should('be.visible');
    });
      cy.addToShoppingCart()
      cy.addInfoForm()
      cy.get('[data-test="title"]').should('have.text',"Checkout: Complete!")
      cy.get('[data-test="complete-header"]').should('have.text',"Thank you for your order!")
      cy.get('[data-test="back-to-products"]').should("be.visible")

  }); 
})