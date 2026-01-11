import {Page, Locator,expect} from '@playwright/test';

export class EntryAd{
    readonly page:Page;
    readonly heading :Locator;

    //model elements
    readonly model: Locator;
    readonly modelTitle : Locator;
    readonly modelBody : Locator;
    readonly modelCloseButton : Locator;

    readonly linkReEnable : Locator;
    
    constructor(page:Page)
    {
        this.page=page;
        this.heading = page.getByRole('heading',{name:'Entry Ad'});
        this.model = page.locator('div.modal');
       // this.modelTitle = page.getByRole('heading',{name:'THIS IS A MODAL WINDOW'});
        this.modelTitle = page.locator('#modal h3');
        this.modelBody = page.locator('#modal .modal-body p');
        this.modelCloseButton = page.locator('#modal .modal-footer p');

        this.linkReEnable = page.getByRole('link',{name:'click here'});
    }

    async modelAppears()
    {
        await expect(this.model).toBeVisible();
        await expect(this.modelTitle).toBeVisible();
    }

    async closeModel()
    {
        await this.modelCloseButton.click();
    }

    async restartModel()
    {
        await this.linkReEnable.click();
    }
}