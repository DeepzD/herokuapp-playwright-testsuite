import {Page,Locator,expect}from '@playwright/test';

export class DynamicControls
{
    readonly page : Page;
    readonly checkBox : Locator;
    readonly removeButton : Locator;
    readonly addButton : Locator;
    readonly goneMessage : Locator;
    readonly backMessage : Locator;
    readonly enableButton :Locator;
    readonly disableButton : Locator;
    readonly textfield : Locator;
    readonly waitingMessage : Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.checkBox = page.locator('input[type="checkbox"]');
        this.removeButton = page.getByRole('button',{name : 'Remove'});
        this.addButton = page.getByRole('button',{name : 'Add'});
        this.textfield = page.locator('input[type="text"]');
        this.enableButton = page.getByRole('button',{name : 'Enable'});
        this.disableButton = page.getByRole('button',{name : 'Disable'});
        this.goneMessage =  page.getByText(`It's gone!`);
        this.backMessage =  page.getByText(`It's back!`);
        this.waitingMessage = page.getByText(`Wait for it... `);
    }

    async pageLoadandElementVisibility()
    {
        await expect(this.checkBox).toBeVisible();
        await expect(this.removeButton).toBeVisible();
        await expect(this.removeButton).toHaveText('Remove');
    }

    async removeCheckBox()
    {
        await this.checkBox.check();
        await this.removeButton.click();
        await expect(this.checkBox).not.toBeVisible();
        await expect(this.addButton).toBeVisible();        
        await expect(this.goneMessage).toBeVisible();
        
    }

    async addCheckBoxagain()
    {
         await this.checkBox.check();
        await this.removeButton.click();
        await this.addButton.click();
        await expect(this.checkBox).toBeVisible();
        await expect(this.goneMessage).not.toBeVisible();
        await expect(this.backMessage).toBeVisible();
        await expect(this.removeButton).toBeVisible();
    }

    async appearLoadingIndicator()
    {
        
    }
}
 