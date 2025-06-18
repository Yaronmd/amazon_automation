import { BasePage } from './BasePage';

/**
 * CategoriesMenu - handles category and sub-category navigation in the menu.
 */
export class CategoriesMenu extends BasePage {
  private categoryPath = '.hmenu-item';

  /**
   * Click on a main category and expect a sub-menu to open.
   * @param category - The category name to select.
   */
  SelectCategory(category: string) {
    this.tryClickCategory(category, 2, true); 
  }

  /**
   * Click on a sub-category (no sub-menu expected).
   * @param subCategory - The sub-category name to select.
   */
  SelectSubCategory(subCategory: string) {
    this.tryClickCategory(subCategory, 3, false); 
  }
  /**
   * Try to click a category, retry if needed, and check for sub-menu if expected.
   * @param category - The category/sub-category name.
   * @param attemptsLeft - How many tries are left.
   * @param expectSubMenu - Whether to expect a sub-menu after click.
   */
  private tryClickCategory(category: string, attemptsLeft: number, expectSubMenu: boolean) {
    cy.get('.hmenu-visible', { timeout: 10000 })
    .find('li:has(a.hmenu-item)')
    .contains('a.hmenu-item', category, { matchCase: false })
    .wait(500) 
    .click()
    .wait(1000) 
    .then(() => {
      if (expectSubMenu) {
        cy.get('.hmenu-visible', { timeout: 5000 }).then($menus => {
          if ($menus.length > 1) {
            cy.log(`Sub-menu opened for category: ${category}`);
          } else if (attemptsLeft > 1) {
            cy.log(`Retrying click for category: ${category}, attempts left: ${attemptsLeft - 1}`);
            cy.wait(500);
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

   /**
   * Make sure the category title is visible and click it (force click).
   * @param category - The category title to verify and click.
   */
  verifyCategoryTitle(category:string){
    cy.get('.hmenu-visible', { timeout: 10000 })
  .find('.hmenu-item.hmenu-title[role="heading"]')
  .contains(category, { matchCase: false })
  .click({ force: true });

  }
}
