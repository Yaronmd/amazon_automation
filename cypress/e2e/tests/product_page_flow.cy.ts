import { HomePage } from '../../support/pages/HomePage'
import { ProductPage } from '../../support/pages/ProductPage';
import { CartPage } from '../../support/pages/CartPage';

describe('Amazon - Search and Product Details Without Login', () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();

  it('should search for a product, navigate to its page, and verify product details', () => {
  
    homePage.searchFor('laptop ship to Israel');
    homePage.verifyResultsContainAny(["laptop"])
    homePage.clickProductByIndex(1);

    productPage.verifyTitleMatchesSelectedProduct()
    productPage.verifyProductHasPrice()
    productPage.verifyAddtoCartVisable()
    
  });
});
