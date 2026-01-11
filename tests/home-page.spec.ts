import {test} from './fixtures/herokuapp-fixtures';

test.describe('HeroKuAPP- successful Page load', ()=>{

test('Load Home Page',async({homePage})=>{
    await homePage.navigateToHomePage();
});  

test('VerifyPageHeaders', async({homePage})=>{
    await homePage.navigateToHomePage();
    await homePage.verifyPageHedersVisible();
});

test('verifyLinkCount', async({homePage})=>{
    await homePage.navigateToHomePage();
        await homePage.verifyListItemCount(44);

});

});