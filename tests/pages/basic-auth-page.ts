import {Page,Locator, expect} from '@playwright/test';

export class BasicAuth
{
    readonly page:Page;
    readonly successfulMessage: Locator;
    
    constructor(page:Page)
    {
            this.page=page;
            this.successfulMessage = page.locator('p');
    }
    
    // async verifySuccessfullogin(username: string,password :string)
    // {
    //     await this.page.fill('#username','admin');
    //     await this.page.fill('#password','admin');
    //     await this.page.click('button[type="submit"]');

    //     const successAlert=this.page.locator('.flash.success');
    //     await expect(successAlert).toBeVisible();

    // }

    async openWithCredentials(username: string, password: string) {

    await this.page.goto(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);
  }

    async verifySuccessfulMessage()
    {
        await expect(this.successfulMessage).toContainText('Congratulations')
    }

}