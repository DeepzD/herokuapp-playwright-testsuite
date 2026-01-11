import {test} from './fixtures/herokuapp-fixtures';

test.describe('HerokuApp- Dragand Drop',()=>{

    test('Verify Box dragged and drop into Box B', async({homePage,dragAnddropPage})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnDragandDrop();
        await dragAnddropPage.verifyDragBandDropintoA();
    });

  
    test('Verify Box B dragged and drop into Box A', async({homePage,dragAnddropPage})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnDragandDrop();
        await dragAnddropPage.verifyDargAandDropintoB();
    });
});