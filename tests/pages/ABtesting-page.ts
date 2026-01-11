import { Page,Locator,expect} from "@playwright/test";

export class ABTestingPage{

    readonly page: Page;
    readonly ABTestingheading : Locator;
    readonly ABTestParagraph : Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.ABTestingheading= page.locator('h3');
        this.ABTestParagraph = page.locator('p');
    }

    //Actions

    async verifyABTestPageTitle()
    {
        await expect(this.ABTestingheading).toBeVisible();
        await expect(this.ABTestingheading).toHaveText('A/B Test Control');
    }

    async verifyABTestParagraph()
    {
        await expect(this.ABTestParagraph).toBeVisible();
        await expect(this.ABTestParagraph).toContainText('split testing.');
        await expect(this.ABTestParagraph).toContainText('learn different versions of a page to see');
    }

    async verifygoBacktoHomePage()
    {
        await this.page.goBack();
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/');
    }

}


