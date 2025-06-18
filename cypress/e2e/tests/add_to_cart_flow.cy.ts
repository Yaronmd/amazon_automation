import { HomePage } from '../../support/pages/HomePage'
import { ProductPage } from '../../support/pages/ProductPage';
import { CartPage } from '../../support/pages/CartPage';

describe('Amazon - shopping without login', () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();


  it('should search, select product, add to cart, and check cart', () => {
    homePage.searchFor('wireless charger');
    homePage.verifyResultsContainAny(["wireless charger"])
    homePage.clickProductByIndex(1)

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
