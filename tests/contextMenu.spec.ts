import {test} from './fixtures/herokuapp-fixtures';

test.describe('Herokuapp - Context Menu',()=>{

    test('verify page Title',async({homePage,contextMenu})=>{

        await homePage.navigateToHomePage();
        await homePage.clickOnContextMenuLink();
        await contextMenu.rightClickOnBox();

    });
});