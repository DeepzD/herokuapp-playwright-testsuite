import {test} from './fixtures/herokuapp-fixtures';

test.describe('HerokuApp- Broken Images', ()=>{

    test ('verify PageTitle asseertion',async({homePage,brokenImages})=>{
        await homePage.navigateToHomePage();
        await homePage.verifyLinkBrokenImages();
        await brokenImages.verifyPageTitle();
    });

    test('verify Images loaded', async({homePage,brokenImages})=>{

        await homePage.navigateToHomePage();
        await homePage.verifyLinkBrokenImages();
        await brokenImages.validateLoadedImages();

    });

    test('verify visibleImage Count', async({homePage,brokenImages}) =>{
        await homePage.navigateToHomePage();
        await homePage.verifyLinkBrokenImages();
        await brokenImages.verifyImageCount(3);
    });

    // test('verify broken images',async({homePage,brokenImages})=>{
    //     await homePage.navigateToHomePage();
    //     await homePage.verifyLinkBrokenImages();
    //     await brokenImages.validateBrokenImages(1);
    // });
});
