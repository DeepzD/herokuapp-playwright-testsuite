import{Page,Locator,expect} from '@playwright/test';

export class DragAndDrop{

    readonly page : Page;
    readonly boxA : Locator;
    readonly boxB : Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.boxA=page.locator('div[id="column-a"]');
        this.boxB=page.locator('div[id="column-b"]');
    }

    async verifyDargAandDropintoB()
    {
        await this.boxA.dragTo(this.boxB);
    }

    async verifyDragBandDropintoA()
    {
        await this.boxB.dragTo(this.boxA);
    }

}