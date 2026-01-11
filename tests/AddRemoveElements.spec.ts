import{test} from './fixtures/herokuapp-fixtures';

test.describe('Verify Add/ Remove Elements', ()=>{

test('Verify Delete button is Appear', async({homePage,addRemoveElementPage})=>{
    await homePage.navigateToHomePage();
    await homePage.verifyAddRemoveElementLink();
    await addRemoveElementPage.verifyClickOnAddElement();
});

test('verify Delete button disapper', async({homePage,addRemoveElementPage}) =>{
    await homePage.navigateToHomePage();
    await homePage.verifyAddRemoveElementLink();
    await addRemoveElementPage.verifyClickOnAddElement();
    await addRemoveElementPage.verifyClickOnDelete();
});

test('verify to go back to Homepage', async({homePage,addRemoveElementPage})=>{
    await homePage.navigateToHomePage();
    await homePage.verifyAddRemoveElementLink();
    await addRemoveElementPage.verifyClickOnAddElement();
    await addRemoveElementPage.verifygoBacktoHomePage();
});
});
