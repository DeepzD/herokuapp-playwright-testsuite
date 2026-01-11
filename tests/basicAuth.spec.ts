import {test} from './fixtures/herokuapp-fixtures';

test.describe('Verify Basic/Auth',()=>{

    test('verify valid credentials', async({homePage,basicAuthPage})=>{
        await homePage.navigateToHomePage();
        await homePage.verifyBasicAuthLink();
        await basicAuthPage.openWithCredentials('admin','admin');
        await basicAuthPage.verifySuccessfulMessage();

    });
});