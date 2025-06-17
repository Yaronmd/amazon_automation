import { BasePage } from './BasePage';

export class TodayDealsPage extends BasePage {
  
  private productCard = "[data-testid='product-card']";
  private productTitle = "#productTitle";

  visitHomePage() {
    cy.visit('https://www.amazon.com');
  }

 
  verifyRecommendationsHaveCards(minCount: number = 3) {
    cy.get(this.productCard)
      .its('length')
      .should('be.greaterThan', minCount);
  }

  verifyFirstProductCardHasImageAndTitle() {
    cy.get(this.productCard).first().within(() => {
      cy.get('img').should('be.visible');
      cy.get('h2, h3, span').should('exist');
    });
  }

  clickFirstProductCard() {
    cy.get(this.productCard).first().click();
  }

  verifyProductPageLoaded() {
    cy.url().should('include', '/dp/');
    cy.get(this.productTitle).should('be.visible');
  }
}
