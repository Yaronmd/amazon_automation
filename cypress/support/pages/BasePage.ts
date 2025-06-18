/**
 * BasePage - basic actions that are shared across different pages.
 */
export class BasePage {

  /**
   * Visit a specific path .
   * @param path The path to visit.
   */  
  visit(path: string) {
    cy.visit(path);
  }

  /**
   * Get the title of the current page.
   */
  getTitle() {
    return cy.title();
  }

  /**
   * Get the element that shows the cart item count.
   */
  getCartCount() {
    return cy.get('#nav-cart-count');
  }

  /**
   * Click the cart icon and go to the cart page.
   */
  goToCart() {
    cy.get('#nav-cart').click();
  }

  /**
   * Scroll to the bottom of the page and wait a bit to let content load.
   */
   scrollDownAndLoad() {
    cy.scrollTo('bottom', { duration: 1500 });
    cy.wait(1000);
  }
}
