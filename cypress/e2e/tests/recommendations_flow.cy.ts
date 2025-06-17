import { HomePage } from '../../support/pages/HomePage'
import { TodayDealsPage } from '../../support/pages/TodaysDealsPage';

describe('Amazon Flow Without Login', () => {
  const homePage = new HomePage();
  const todayDealsPage = new  TodayDealsPage()

  it('should load dynamic recommendations and navigate to a product page', () => {

    homePage.clickTodayDealsButton()
    todayDealsPage.verifyRecommendationsHaveCards(3);
    todayDealsPage.verifyFirstProductCardHasImageAndTitle();
    todayDealsPage.clickFirstProductCard();
    todayDealsPage.verifyProductPageLoaded();
    
  });
});
