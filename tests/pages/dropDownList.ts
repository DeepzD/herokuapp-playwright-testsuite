import {Page, Locator,expect} from '@playwright/test';

export class DropDownList
{
    readonly page:Page;
    readonly pageTitle :Locator;
    readonly dropdown :Locator;


    constructor(page:Page)
    {
        this.page=page;
        this.pageTitle= page.locator('');
        this.dropdown = page.locator('select[id="dropdown"]');
    }

    async clickOnDropdown()
    {
        await this.dropdown.selectOption({label:'Option 1'});
    }
}