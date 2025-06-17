import { HomePage } from '../../support/pages/HomePage'
import { CategoriesMenu } from '../../support/pages/CategoriesMenu';

describe('Amazon Flow Without Login', () => {
  const homePage = new HomePage();
  const categoriesMenu = new CategoriesMenu();
 

  it('should search, select product, add to cart, and check cart', () => {

    homePage.clickAllCategoriesButton()
    categoriesMenu.SelectCategory("Electronics")
    categoriesMenu.verifyCategoryTitle("Electronics")
    categoriesMenu.SelectSubCategory("Camera & Photo")
    homePage.verifyResultsContainAny(["Camera","Photo"])
  });
});
