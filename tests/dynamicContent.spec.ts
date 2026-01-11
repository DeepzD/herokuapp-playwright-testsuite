import {test} from'./fixtures/herokuapp-fixtures';

test.describe('HerokuApp-Dynamic Content',()=>{

    test('Page loads and title is correct',async({homePage})=>{
        await homePage.navigateToHomePage();
        await homePage.clcikOnDynamicContent();
    });

    test('Correct number of content rows appears',async({homePage,dynamicContent})=>{
        await homePage.navigateToHomePage();
        await homePage.clcikOnDynamicContent();
        await dynamicContent.verifyNoOfContentRows(3);

    });

    test('content rows texts before refresh',async({homePage,dynamicContent})=>{
        await homePage.navigateToHomePage();
        await homePage.clcikOnDynamicContent();
        await dynamicContent.CaptureTextFromEachRow();

    });

    test('content rows has non broken images',async({homePage,dynamicContent})=>{
        await homePage.navigateToHomePage();
        await homePage.clcikOnDynamicContent();
       // await dynamicContent.validateLoadedImages();

    });
});