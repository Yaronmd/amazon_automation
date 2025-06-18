/// <reference types="cypress" />
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  private productTitle = '#productTitle';
  private productPrice = '.a-price'
  private addToCartPath = '#add-to-cart-button'
  
  /**
   * Checks that the Add to Cart button is visible.
   */
  verifyAddtoCartVisable() {
    cy.get(this.addToCartPath).should('be.visible');
  }

  /**
   * Clicks the Add to Cart button.
   */
  addToCart() {
    cy.get(this.addToCartPath).click();
  }

  /**
   * Verifies that the product title matches the name of the selected product.
   */
  verifyTitleMatchesSelectedProduct() {
  cy.get(this.productTitle, { timeout: 10000 })
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

/**
   * Verifies that the product has a visible price.
   */
verifyProductHasPrice() {
  cy.get(this.productPrice).first()
    .should('be.visible')
    .invoke('text')
    .then((priceText) => {
      const cleanedPrice = priceText.trim();
      cy.log(`Product price: ${cleanedPrice}`);
      expect(cleanedPrice).to.not.be.empty;
      expect(cleanedPrice).to.match(/[\d,.]/);
    });
}
}
