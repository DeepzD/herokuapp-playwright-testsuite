import{Page, Locator,expect} from '@playwright/test'

export class AddRemoveElements{
    readonly page:Page;
    readonly pageTile : Locator;
    readonly AddElement : Locator;
    readonly Delete : Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.pageTile= page.locator('h3');
        this.AddElement=page.getByRole('button', { name: 'Add Element' });
        this.Delete=page.getByRole('button',{name:'Delete'});
    }

    async verifyPageTitle()
    {
         await expect(this.pageTile).toBeVisible();
         await expect(this.pageTile).toHaveText('Add/Remove Elements');
    }

    async verifyClickOnAddElement()
    {
        await this.AddElement.click();
        await expect(this.Delete).toBeVisible();
    }

    async verifyClickOnDelete()
    {
        await this.Delete.click();
        await expect(this.Delete).not.toBeVisible();
    }
    
     async verifygoBacktoHomePage()
    {
        await this.page.goBack();
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/');
    }
}