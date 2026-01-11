import{test} from './fixtures/herokuapp-fixtures';

test.describe('HerokuApp - Dropdown feature', ()=>{

    test('verifyDropDown', async({homePage,dropDownlist})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnDropdownlistPage();
        await dropDownlist.clickOnDropdown();

    });
});