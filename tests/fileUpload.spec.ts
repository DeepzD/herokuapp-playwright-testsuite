import {test} from './fixtures/herokuapp-fixtures';


test.describe('Heroku-App File Upload',()=>{

     test.beforeEach(async({homePage})=>{
         await homePage.navigateToHomePage();
        await homePage.clickOnFileUpload();
     });

    test('Page loads', async({homePage,fileUpload})=>{
       
        await fileUpload.pageLoad();
    });

    test('Upload a valid file successfully', async({homePage,fileUpload})=>{
      //  await homePage.navigateToHomePage();
      //  await homePage.clickOnFileUpload();
        await fileUpload.uploadFile('selenide-intro.txt');
        
    });

    test('Click Upload without selecting a file (no success message)',async({homePage,fileUpload})=>{
    //    await homePage.navigateToHomePage();
     //   await homePage.clickOnFileUpload();
        await fileUpload.uploadWithoutFile('');
    });

    test('Cancel file picker behavior (simulate as no file selected)', async({homePage,fileUpload})=>{
     //   await homePage.navigateToHomePage();
    //    await homePage.clickOnFileUpload();
        await fileUpload.CancelFileUpload();

    });

        test('Re-upload another file after a successful upload', async({homePage,fileUpload})=>{
      //  await homePage.navigateToHomePage();
      //  await homePage.clickOnFileUpload();
        await fileUpload.uploadFile('selenide-intro.txt');
        await homePage.navigateToHomePage();
        await homePage.clickOnFileUpload();
        await fileUpload.uploadFile('selenide-intro.txt');

    });

});