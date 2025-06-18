/// <reference types="cypress" />

import { BasePage } from './BasePage';

/**
 * HomePage - handles actions on the Amazon home page.
 */
export class HomePage extends BasePage {
  private searchBox = '#twotabsearchtextbox';
  private searchButton = '#nav-search-submit-button';
  private productLink = '.s-main-slot .s-result-item';
  private productTitle = 'h1#title span, #productTitle';
   private productTitleInResults = '.s-main-slot .s-result-item[data-component-type="s-search-result"] h2';
  private allCategoriesMenuButton = '#nav-hamburger-menu'
  private todayDealsButton = "#nav-xshop > ul > li:nth-child(1) > div > a"
 


  /**
   * Search for a product using the search box.
   * @param product - The product name or keywords.
   */
  searchFor(product: string) {
    cy.get(this.searchBox).clear().type(product);
    cy.get(this.searchButton).click();
  }

  /**
   * Clicks the hamburger menu button to open all categories.
   */
  clickAllCategoriesButton(){
    cy.get(this.allCategoriesMenuButton).click()
  }

  /**
   * Clicks on the "Today's Deals" button.
   */
   clickTodayDealsButton(){
    cy.get(this.todayDealsButton).click()
  }

  /**
   * Clicks on the first product with an "Add to Cart" button, or keeps trying the next one.
   * @param index - The index of the product to try (default 0).
   */
  clickProductByIndex(index: number = 0) {
     cy.get(this.productLink).then($products => {
    if (index >= $products.length) {
      throw new Error('No product with Add to Cart found');
    }

    const $product = Cypress.$($products[index]);
    const hasAddToCart = $product.find('input[type="submit"][value="Add to Cart"], button[name="submit.addToCart"], .a-button-text:contains("Add to cart")').length > 0;

    if (hasAddToCart) {
      cy.wrap($product).find('a').first().click();
      cy.log(`Clicked on product at index ${index} with Add to Cart`);
      cy.get(this.productTitle, { timeout: 10000 })
        .should('be.visible')
        .invoke('text')
        .as('selectedProductName');
    } else {
      cy.log(`No Add to Cart at index ${index}, checking next product`);
      this.clickProductByIndex(index + 1);
    }
  });
  }

 /**
   * Checks if search results contain at least one item matching any of the keywords.
   * @param keywords - List of keywords to check in the results.
   */
 verifyResultsContainAny(keywords: string[]) {
  cy.get(this.productTitleInResults, { timeout: 10000 })
    .should('exist') 
    .then(($titles) => {
      const relevant = $titles.toArray().filter(el => {
        const text = el.innerText.toLowerCase();
        return keywords.some(keyword => text.includes(keyword.toLowerCase()));
      });

      cy.log(`Found ${relevant.length} relevant results`);
      expect(relevant.length).to.be.at.least(1);
    });
}


}
