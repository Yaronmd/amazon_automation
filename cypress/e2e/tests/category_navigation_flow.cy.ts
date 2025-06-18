import { HomePage } from '../../support/pages/HomePage'
import { CategoriesMenu } from '../../support/pages/CategoriesMenu';

describe('Category Navigation Flow', () => {
  const homePage = new HomePage();
  const categoriesMenu = new CategoriesMenu();
 

  it('should navigate to Electronics and see relevant products', () => {

    homePage.clickAllCategoriesButton()
    categoriesMenu.SelectCategory("Electronics")
    categoriesMenu.verifyCategoryTitle("Electronics")
    categoriesMenu.SelectSubCategory("Camera & Photo")
    homePage.verifyResultsContainAny(["Camera","Photo"])
  });
});
