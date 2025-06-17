import { HomePage } from '../../support/pages/HomePage'
import { ProductPage } from '../../support/pages/ProductPage';
import { CartPage } from '../../support/pages/CartPage';

describe('Amazon Flow Without Login', () => {
  const homePage = new HomePage();

  it('should search for a product and verify search results contain the product name', () => {
 
    homePage.searchFor('wireless mouse ship to Israel');
    homePage.verifyResultsContainAny(["wireless mouse"])
  });
});
