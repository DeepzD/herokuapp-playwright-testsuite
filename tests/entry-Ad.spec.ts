import {test} from './fixtures/herokuapp-fixtures';

test.describe('Heroku APP - Entry Ad',()=>{

    test('Modal appears on first load', async({homePage,entryAd})=>{
        await homePage.navigateToHomePage();
        await homePage.clickonEntryAd();
        await entryAd.modelAppears();
    });

    test('Close Modal after appears on first load', async({homePage,entryAd})=>{
        await homePage.navigateToHomePage();
        await homePage.clickonEntryAd();
        await entryAd.modelAppears();
        await entryAd.closeModel();
    });

    test('Restart triggers modal again',async({homePage,entryAd})=>{
            await homePage.navigateToHomePage();
            await homePage.clickonEntryAd();
            await entryAd.modelAppears();
            await entryAd.closeModel();
            await entryAd.restartModel();
            await entryAd.modelAppears();
    });

});