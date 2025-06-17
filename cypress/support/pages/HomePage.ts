/// <reference types="cypress" />

import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private searchBox = '#twotabsearchtextbox';
  private searchButton = '#nav-search-submit-button';
  private productLink = '.s-main-slot .s-result-item h2';
  private allCategoriesMenuButton = '#nav-hamburger-menu'
  private todayDealsButton = "#nav-xshop > ul > li:nth-child(1) > div > a"


  searchFor(product: string) {
    cy.get(this.searchBox).clear().type(product);
    cy.get(this.searchButton).click();
  }
  clickAllCategoriesButton(){
    cy.get(this.allCategoriesMenuButton).click()
  }
   clickTodayDealsButton(){
    cy.get(this.todayDealsButton).click()
  }
  clickProductByIndex(index: number) {
    cy.get(this.productLink)
      .eq(index)
      .invoke('text')
      .as('selectedProductName')
      .then(() => {
        cy.get(this.productLink).eq(index).click();
      });
  }

 verifyResultsContainAny(keywords: string[]) {
  cy.get('.s-main-slot .s-result-item[data-component-type="s-search-result"] h2', { timeout: 10000 })
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
