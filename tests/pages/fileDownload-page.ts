import {Page, Locator, expect} from '@playwright/test';
import fs from 'fs';
import path from 'node:path';

export class FileDownload
{
    readonly page:Page;
    readonly pageHeading:Locator;
    readonly filelinks :Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.pageHeading = page.getByRole('heading',{name:'File Downloader'});
        this.filelinks = page.locator('#content a');
    }

    async pageLoad()
    {
        await expect(this.pageHeading).toHaveText('File Downloader');
    }

    async downloadLinkVisibility(expctedCount:number)
    {
        await expect(this.filelinks.first()).toBeVisible();
        const linkCount= await this.filelinks.count();
        console.log(linkCount);
        await expect(this.filelinks).toHaveCount(expctedCount);
    }

    async downloadLinkcount()
    {
        //console.log(this.page.url());
        await this.page.waitForURL('**/download');
        await expect(this.filelinks.first()).toBeVisible();
        const linkCount= await this.filelinks.count();
        await expect(linkCount).toBeGreaterThan(0);
        console.log(linkCount);
    }

    async downloadFirstFile()
    {
        // Start download
        const [download] = await Promise.all([
                this.page.waitForEvent('download'),
                this.filelinks.first().click(),
        ]);
        const fileName = download.suggestedFilename();
        expect(fileName.length).toBeGreaterThan(0);

  // Save to test's output folder
        const savePath = `test-results/downloads/${fileName}`;
        await download.saveAs(savePath);
    }

    async downloadedfileExistGreaterthanZero()
    {
        const [download] = await Promise.all([
                this.page.waitForEvent('download'),
                this.filelinks.first().click(),
        ]);
        const fileName = download.suggestedFilename();
        expect(fileName.length).toBeGreaterThan(0);

  // Save to test's output folder
        const savePath = `test-results/downloads/${fileName}`;
        await download.saveAs(savePath);

        expect(fs.existsSync(savePath)).toBeTruthy();
        const Stat = fs.statSync(savePath);
        expect(Stat.size).toBeGreaterThan(0);
    }

    async downloadMultipleFiles()
    {
        await this.page.waitForURL('**/download');
        await expect(this.filelinks.first()).toBeVisible();
        const linksA= this.filelinks.nth(0);
        const linksB= this.filelinks.nth(1);

        const [downloadA] = await Promise.all([
                this.page.waitForEvent('download'),
                linksA.click(),
        ]);

        const fileNameA = downloadA.suggestedFilename();
        expect(fileNameA.length).toBeGreaterThan(0);
        const savePathA = `test-results/downloads/${fileNameA}`;
        await downloadA.saveAs(savePathA);

         const [downloadB] = await Promise.all([
                this.page.waitForEvent('download'),
                linksB.click(),
        ]);

        const fileNameB = downloadB.suggestedFilename();
        expect(fileNameB.length).toBeGreaterThan(0);
        const savePathB = `test-results/downloads/${fileNameB}`;
        await downloadB.saveAs(savePathB);
    }

    async reDownloadSameFile()
    {
         await this.page.waitForURL('**/download');
        await expect(this.filelinks.first()).toBeVisible();
        const filelink= this.filelinks.first();
        
        const [download1] = await Promise.all([
                this.page.waitForEvent('download'),
                filelink.click(),
        ]);

        const fileName1 = download1.suggestedFilename();
        expect(fileName1.length).toBeGreaterThan(0);
        const savePath1 = path.join(`test-results/downloads/`, `run1-${fileName1}`);
        await download1.saveAs(savePath1);

         const [download2] = await Promise.all([
                this.page.waitForEvent('download'),
                filelink.click(),
        ]);

        const fileName2 = download2.suggestedFilename();
        expect(fileName2.length).toBeGreaterThan(0);
      // const savePath2 = `test-results/downloads/${fileName2}`;
        const savePath2 = path.join(`test-results/downloads/`, `run2-${fileName2}`);
        await download2.saveAs(savePath2);
    }

    async randomlyDownload()
    {
        await this.page.waitForURL('**/download');
        await expect(this.filelinks.first()).toBeVisible();
        const linkCount= await this.filelinks.count();

        const randomIndex= Math.floor(Math.random()*linkCount);
        console.log(randomIndex);

        const randomLink= this.filelinks.nth(randomIndex);

        const [randomDownload] = await Promise.all([
                this.page.waitForEvent('download'),
                randomLink.click(),
        ]);

        const randomFile = randomDownload.suggestedFilename();
        expect(randomFile.length).toBeGreaterThan(0);
        const randomPath = path.join(`test-results/downloads/`, `random-${randomFile}`);
        await randomDownload.saveAs(randomPath);
    }
}