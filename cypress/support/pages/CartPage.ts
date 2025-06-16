import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  
  getCartItems() {
    return cy.get('.sc-list-item');
  }

  verifyCartTitleMatchesSelectedProduct() {
  this.getCartItems()
    .should('be.visible')
    .invoke('text')
    .then((titleText) => {
      cy.then(function () {
        const productName = (this.selectedProductName as string).trim();
        const cleanedTitle = titleText.trim();
        cy.log(`Selected: ${productName}`);
        cy.log(`Title: ${cleanedTitle}`);
        expect(cleanedTitle).to.include(productName);
      });
    });
}
}
