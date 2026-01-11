import {test} from './fixtures/herokuapp-fixtures';


test.describe('herokuapp - AB Test', () =>{

    test('verify AT Test page heading', async({homePage,abTestPage})=>{

        await homePage.navigateToHomePage();
        await homePage.verifyABTestingLink();
        await abTestPage.verifyABTestPageTitle();

    });

    test('verify AT Test paragraph', async({homePage,abTestPage})=>{

        await homePage.navigateToHomePage();
        await homePage.verifyABTestingLink();
        await abTestPage.verifyABTestParagraph();  
 
    });

    test('Verify Navigate back to home page',async({homePage,abTestPage})=>{
        await homePage.navigateToHomePage();
        await homePage.verifyABTestingLink();
      //  await abTestPage.verifyABTestPageTitle();
        await abTestPage.verifygoBacktoHomePage();
    });
    
});
