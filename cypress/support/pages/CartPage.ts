import { BasePage } from './BasePage';

/**
 * CartPage - actions and checks for the cart page.
 */
export class CartPage extends BasePage {
  private cardItems = '.sc-list-item'

  /**
   * Get all cart item elements.
   */
  getCartItems() {
    return cy.get(this.cardItems);
  }
  
  /**
   * Check that the cart contains the product we selected earlier.
   * Compares the cart item text with the saved product name.
   */
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
