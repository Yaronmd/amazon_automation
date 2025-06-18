import { BasePage } from './BasePage';

export class TodayDealsPage extends BasePage {
  
  private productCard = "[data-testid='product-card']";
  private productTitle = '#productTitle';

   /**
   * Checks that there are at least a given number of deal product cards.
   * @param minCount Minimum number of product cards expected (default is 3).
   */
  verifyRecommendationsHaveCards(minCount: number = 3) {
    cy.get(this.productCard)
      .its('length')
      .should('be.greaterThan', minCount);
  }

   /**
   * Verifies that the first product card has an image and a title element.
   */
  verifyFirstProductCardHasImageAndTitle() {
    cy.get(this.productCard).first().within(() => {
      cy.get('img').should('be.visible');
      cy.get('h2, h3, span').should('exist');
    });
  }

  /**
   * Clicks the first product card.
   */
  clickFirstProductCard() {
    cy.get(this.productCard).first().click();
  }

  /**
   * Verifies that the product page is loaded by checking URL and title visibility.
   */
  verifyProductPageLoaded() {
    cy.url().should('include', '/dp/');
    cy.get(this.productTitle).should('be.visible');
  }
}
