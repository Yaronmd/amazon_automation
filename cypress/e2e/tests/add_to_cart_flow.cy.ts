import { HomePage } from '../../support/pages/HomePage'
import { ProductPage } from '../../support/pages/ProductPage';
import { CartPage } from '../../support/pages/CartPage';

describe('Amazon Flow Without Login', () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();


  it('should search, select product, add to cart, and check cart', () => {
    homePage.searchFor('Sony WH-1000XM4 ship to Israel');
    homePage.verifyResultsContainAny(["Sony WH-1000XM4"])
    homePage.clickProductByIndex(1);

    productPage.verifyTitleMatchesSelectedProduct()
    productPage.verifyProductHasPrice()
    productPage.verifyAddtoCartVisable()

    productPage.addToCart();
    productPage.getCartCount().should('contain', '1');

    productPage.goToCart();
    cartPage.getCartItems().should('have.length.at.least', 1);
    cartPage.verifyCartTitleMatchesSelectedProduct()
  });
});
