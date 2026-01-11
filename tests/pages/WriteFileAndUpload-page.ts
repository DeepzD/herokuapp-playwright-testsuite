import {Page, Locator, expect} from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

export class WriteFileAndUpload
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


async uploadAndAssert(page: any, filePath: string, expectedFileName: string) {

  // attach
  await this.chooseFilebutton.setInputFiles(filePath);
  await expect(this.chooseFilebutton).not.toHaveValue(''); // confirm attached

  // submit
  await this.uploadButton.click();

  // assert success
  await expect(this.uploadedMessage).toHaveText('File Uploaded!');
  await expect(this.uploadedFileName).toHaveText(expectedFileName);
}

}