import {Page, Locator,expect} from '@playwright/test';

export class BBrokenImages
{ 
    readonly page: Page;
    readonly pageTitle:Locator;
    readonly images:Locator;

    constructor(page:Page)
    {
        this.page=page;

        this.pageTitle=page.locator('h3');
        this.images = page.locator('#content img[src]');
    }

    async verifyPageTitle()
    {
       // await expect(this.pageTitlle).toBeVisible();
        await expect(this.pageTitle).toHaveText("Broken Images");
    }

    async validateLoadedImages()
    {
        const count = await this.images.count();
        for(let i=0;i<count;i++)
        {
            const img= this.images.nth(i);
            await expect(img).toBeVisible();

            // Check that the image has a naturalWidth greater than 0,
            const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
        }
         
    }
    async verifyImageCount(expectedCount: number)
    {
        await expect(this.images).toHaveCount(expectedCount);
    }

    async validateBrokenImages(expectedBrokenAtLeast = 1)
    {
        const count=await this.images.count();
        const brokenSrc: string[]=[];
       //let btorkenCount =0;

        for(let i=0;i<count;i++)
        {
            const img=this.images.nth(i);
            const src = (await img.getAttribute('src')) ?? '(no src)';

            const isBroken = await img.evaluate((el:HTMLImageElement)=>
                {
                    return !el.complete || el.naturalWidth===0;
                });

            if(isBroken) {
                brokenSrc.push(src);
            } 
        }
        console.log(`Broken images =: ${brokenSrc.length}`);
         expect(brokenSrc.length).toBeGreaterThanOrEqual(expectedBrokenAtLeast);
       
        }

}

