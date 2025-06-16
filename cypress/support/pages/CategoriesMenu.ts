import { BasePage } from './BasePage';

export class CategoriesMenu extends BasePage {
  private categoryPath = '.hmenu-item';

  SelectCategory(category: string) {
    this.tryClickCategory(category, 2, true); 
  }

  SelectSubCategory(subCategory: string) {
    this.tryClickCategory(subCategory, 1, false); 
  }

  private tryClickCategory(category: string, attemptsLeft: number, expectSubMenu: boolean) {
    cy.get('.hmenu-visible', { timeout: 10000 })
      .find(this.categoryPath)
      .contains(category)
      .wait(300)
      .should('be.visible')
      .scrollIntoView()
      .wait(300)
      .trigger('mouseover')
      .wait(300)
      .click()
      .wait(500)
      .then(() => {
        if (expectSubMenu) {
          cy.get('body').then($body => {
            const subMenus = $body.find('.hmenu-visible').length;
            if (subMenus > 1) {
              cy.log(`Sub-menu opened for category: ${category}`);
            } else if (attemptsLeft > 1) {
              cy.log(`Retrying click for category: ${category}`);
              this.tryClickCategory(category, attemptsLeft - 1, expectSubMenu);
            } else {
              throw new Error(`Failed to open sub-menu for category: ${category}`);
            }
          });
        } else {
          cy.log(`Navigated to sub-category: ${category}`);
        }
      });
  }

  verifyCategoryTitle(category:string){
    cy.get('.hmenu-visible', { timeout: 10000 })
  .find('.hmenu-item.hmenu-title[role="heading"]')
  .contains(category, { matchCase: false })
  .click({ force: true });

  }
}
