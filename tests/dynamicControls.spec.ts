import {test} from './fixtures/herokuapp-fixtures';

test.describe('Heloku-APP Dynamic Controls',()=>{

    test('Page loads and checkbox section visible',async({homePage,dynamicControls})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnDynamicControls();
        await dynamicControls.pageLoadandElementVisibility();

    });

    test('Remove checkbox successfully',async({homePage,dynamicControls})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnDynamicControls();
        await dynamicControls.removeCheckBox();

    });

    test('Add checkbox back successfully',async({homePage,dynamicControls})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnDynamicControls();
        await dynamicControls.removeCheckBox();
    });

});