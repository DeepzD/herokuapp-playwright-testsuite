import {Page,Locator,expect} from '@playwright/test';

export class CheckBoxes
{
    readonly page:Page;
    readonly CBPageTitle: Locator;
    readonly checkBox1 :Locator;
    readonly checkBox2 :Locator;
    readonly checkbox : Locator;

    constructor(page:Page)
    {

        this.page=page;
        this.CBPageTitle = page.locator('h3');
        this.checkBox1 = page.locator('#checkboxes input').first();
        this.checkBox2 = page.locator('#checkboxes input').last();
        this.checkbox = page.locator('#checkboxes input');
    }

    async verifyPageTitle()
    {
        await expect(this.CBPageTitle).toBeVisible();
        await expect(this.CBPageTitle).toHaveText("Checkboxes");
    }

    async verifyIntialStatesOfChecboxeOne()
    {
        // const checked = await this.checkBox1.isChecked;
        // expect(checked).toBeFalsy();

        //  expect((await this.checkBox1).isChecked()).toBeFalsy();
         await expect(this.checkBox1).not.toBeChecked();
    }
    async verifyIntialStatesOfChecboxeTwo()
    {
        await expect(this.checkBox2).not.toBeChecked();
    }
    async clickOnCheckboxOne()
     {
         await this.checkBox1.check();
         await expect(this.checkBox1).toBeChecked();
        // await this.checkBox1.isChecked();
    }

    async UnclickOnCheckbxTwo()
    {
        await this.checkBox2.uncheck();
        await expect(this.checkBox2).not.toBeChecked();
    }

    async setCheckboxStatus()
    {
        const count =await this.checkbox.count();
        for(let i=0;i<count;i++)
        {
            const ckbox=this.checkbox.nth(i);
            const isChecked = await this.checkbox.isChecked();

            if(!isChecked)
            {
               await ckbox.click();
            }
            else
            {
                await ckbox.uncheck();
            }
        }

    }

}