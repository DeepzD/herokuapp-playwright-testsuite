import {Page,Locator,expect} from '@playwright/test';

export class DynmicContent
{
    readonly page:Page;
    readonly pageTitle: Locator;
    readonly content_rows :Locator;
    readonly content_text:Locator;
    readonly content_img:Locator;
    readonly click_here_link : Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.pageTitle=page.locator('h3');
        this.content_rows = page.locator('#content> .row');
        this.content_img = page.locator('#content img');
        this.content_text = page.locator('.large-10');
        this.click_here_link=page.getByRole('link',{name:'click here'});
    } 

    async pageLoadandTitleDisplay()
    {
        await expect(this.pageTitle).toHaveText('Dynamic Content');
    }

    async verifyNoOfContentRows(rowCount:number)
    {
        await expect(this.content_rows).toHaveCount(rowCount);
    }
    async CaptureTextFromEachRow()
    {
      
      //const count = await this.content_rows.count();
      //console.log(count);
  //   console.log(await this.content_text.nth(2).innerText());

       const texts = await this.content_text.allTextContents();

texts.forEach((text, index) => {
  console.log(`Line ${index + 1}: ${text}`);
});

// const count = await this.content_text.count();

// for (let i = 0; i < count; i++) {
//   const text = await this.content_text.nth(i).innerText();
//   console.log(`Line ${i + 1}: ${text}`);
// }


    }


  
}
