import {test} from './fixtures/herokuapp-fixtures';

test.describe('HerokuApp Filde Donwload',()=>{

    test('Page loads and download links are visible',async({homePage,fileDownloader})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnFileDownload();
        await fileDownloader.pageLoad();
    });

    test('Downloaded file exists and size', async({homePage,fileDownloader})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnFileDownload();
        await fileDownloader.downloadLinkcount();

    });

     test('Download a file successfully', async({homePage,fileDownloader})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnFileDownload();
        await fileDownloader.downloadFirstFile();

    });

    test('Downloaded file exists and size > 0', async({homePage,fileDownloader})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnFileDownload();
        await fileDownloader.downloadedfileExistGreaterthanZero();

    });

    test(' Download multiple different files', async({homePage,fileDownloader})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnFileDownload();
        await fileDownloader.downloadMultipleFiles();

    });

    test('Re-download the same file twice', async({homePage,fileDownloader})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnFileDownload();
        await fileDownloader.reDownloadSameFile();

    });

    test('Randomly download file', async({homePage,fileDownloader})=>{
        await homePage.navigateToHomePage();
        await homePage.clickOnFileDownload();
        await fileDownloader.randomlyDownload();

    });
});