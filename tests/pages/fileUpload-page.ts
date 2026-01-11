import {Page, Locator, expect} from '@playwright/test';
import { url } from 'inspector';
import * as path from 'path';

export class FileUploader
{
    readonly page:Page;
    readonly chooseFilebutton :Locator;
    readonly uploadButton : Locator;
    readonly dragAndDropView : Locator;
    readonly uploadedMessage : Locator;
    readonly uploadedFileName : Locator;
    //readonly noFileChosemsg :Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.chooseFilebutton = page.locator('#file-upload');
        this.uploadButton = page.getByRole('button', {name:'Upload'});
        this.dragAndDropView = page.locator('div[id="drag-drop-upload"]');
        this.uploadedMessage = page.locator('#content h3');
        this.uploadedFileName = page.locator('#uploaded-files');
    }

    async pageLoad()
    {
        await expect(this.chooseFilebutton).toBeVisible();
        await expect(this.uploadButton).toBeVisible();

    }
    async uploadFile(fileName : string)
    {
        const dir = path.join(process.cwd(), 'test-results', 'UploadFiles');
        const filePath = path.join(dir, fileName);
        await this.chooseFilebutton.setInputFiles(filePath);

        await Promise.all([this.page.waitForURL('**/upload'),this.uploadButton.click()]);

        await expect(this.uploadedMessage).toBeVisible();
        await expect(this.uploadedMessage).toHaveText('File Uploaded!');
        await expect(this.uploadedFileName).toHaveText(fileName);

    }

    async uploadWithoutFile(fileName:string)
    {
        const dir = path.join(process.cwd(), 'test-results', 'UploadFiles');
        const filePath =path.join(dir, fileName);
        await this.chooseFilebutton.setInputFiles(filePath);

        await Promise.all([
            this.page.waitForURL('**/upload'),
            this.uploadButton.click()
        ]);

        await expect(this.uploadedMessage).not.toBeVisible();
    }

    async CancelFileUpload()
    {
        await expect(this.chooseFilebutton).toHaveValue('');

        await Promise.all([
            this.page.waitForURL('**/upload'),
            this.uploadButton.click()
        ]);

        await expect(this.chooseFilebutton).toBeVisible();
        await expect(this.uploadButton).toBeVisible();
    }

  
    
}