export class BasePage {
  visit(path: string) {
    cy.visit(path);
  }

  getTitle() {
    return cy.title();
  }

  getCartCount() {
    return cy.get('#nav-cart-count');
  }

  goToCart() {
    cy.get('#nav-cart').click();
  }
}
