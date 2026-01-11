import {Page, Locator, expect} from '@playwright/test';

export class ContectMenu
{
    readonly page : Page;
    readonly pageTitle:Locator;
    readonly box : Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.pageTitle = page.locator('h3');
        this.box = page.locator('#hot-spot');
    }

    async verifyPageTitle()
    {
        await expect(this.pageTitle).toHaveText('Context Menu');
    }

    async rightClickOnBox()
    {
        await this.box.click({ button: 'right' });
    }
}