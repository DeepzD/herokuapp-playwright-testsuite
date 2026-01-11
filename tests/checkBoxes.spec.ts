import {test} from './fixtures/herokuapp-fixtures';

test.describe('herokuApp-Checkboxes', ()=>{

test('verify Checkbox page visibility', async({homePage,checkBoxesPage})=>{
    await homePage.navigateToHomePage();
    await homePage.ClickOnCheckBoxesLink();
    await checkBoxesPage.verifyPageTitle();
});    

test('verify checkboxes are not checked at pageload',async({homePage,checkBoxesPage})=>{
    await homePage.navigateToHomePage();
    await homePage.ClickOnCheckBoxesLink();
    await checkBoxesPage.verifyIntialStatesOfChecboxeOne();
    await checkBoxesPage.verifyIntialStatesOfChecboxeTwo();
});

test('verify checkboxes are checked successfully', async({homePage,checkBoxesPage})=>{

    await homePage.navigateToHomePage();
    await homePage.ClickOnCheckBoxesLink();
    await checkBoxesPage.clickOnCheckboxOne();
});

test('verify checkboxes are unchecked successfully', async({homePage,checkBoxesPage})=>{

    await homePage.navigateToHomePage();
    await homePage.ClickOnCheckBoxesLink();
    await checkBoxesPage.UnclickOnCheckbxTwo();
});

test('verify checkbox statues',async({homePage,checkBoxesPage})=>{
    await homePage.navigateToHomePage();
    await homePage.ClickOnCheckBoxesLink();
    await checkBoxesPage.setCheckboxStatus();
});

});