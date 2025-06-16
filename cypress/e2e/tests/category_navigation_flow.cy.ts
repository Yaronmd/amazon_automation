import { HomePage } from '../../support/pages/HomePage'
import { CategoriesMenu } from '../../support/pages/CategoriesMenu';

describe('Amazon Flow Without Login', () => {
  const homePage = new HomePage();
  const categoriesMenu = new CategoriesMenu();
 

  it('should search, select product, add to cart, and check cart', () => {
    homePage.visit('https://www.amazon.com');
    homePage.clickAllCategoriesButton()
    categoriesMenu.SelectCategory("Electronics")
    categoriesMenu.verifyCategoryTitle("Electronics")
    categoriesMenu.SelectSubCategory("Camera & Photo")
    homePage.verifyResultsContainAny(["Camera","Photo"])

    // homePage.searchFor('wireless mouse ship to Israel');
    // homePage.verifyResultsContainAny(["wireless mouse"])
    // homePage.clickProductByIndex(1);

    // productPage.verifyTitleMatchesSelectedProduct()
    // productPage.addToCart();
    // productPage.getCartCount().should('contain', '1');

    // productPage.goToCart();
    // cartPage.getCartItems().should('have.length.at.least', 1);
  });
});
