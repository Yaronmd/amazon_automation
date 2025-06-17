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
   scrollDownAndLoad() {
    cy.scrollTo('bottom', { duration: 1500 });
    cy.wait(1000);
  }
}
