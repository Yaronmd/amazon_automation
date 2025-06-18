/// <reference types="cypress" />
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  private productTitle = '#productTitle';
  private productPrice = '.a-price'
  private addToCartPath = '#add-to-cart-button'
  
  verifyAddtoCartVisable() {
    cy.get(this.addToCartPath).should('be.visible');
  }

  addToCart() {
    cy.get(this.addToCartPath).click();
  }

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
