import {Page, Locator, expect} from '@playwright/test';

export class FloatingMenu
{
    readonly page:Page;
    readonly menu : Locator;
    readonly home : Locator;
    readonly news : Locator;
    readonly contact : Locator;
    readonly about : Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.menu = page.locator('#menu');
        this.home =page.getByRole('link',{name:'Home'});
        this.about = page.getByRole('link',{name:'About'});
        this.news = page.getByRole('link',{name:'News'});
        this.contact = page.getByRole('link',{name:'Contact'});
    }

    async MenuVisible ()
    {
        await Promise.all([this.page.waitForURL('**/floating_menu'), 
            this.menu.isVisible()
        ]);
        await expect(this.menu).toBeVisible();
        await expect(this.home).toBeVisible();
        await expect(this.news).toBeVisible();
        await expect(this.contact).toBeVisible();
        await expect(this.about).toBeVisible();
    }

    async menuVisblewhenScrollDown()
    {
        await Promise.all([
            this.page.mouse.wheel(0,2000),
            this.page.waitForURL('**/floating_menu')
        ]);

        await expect(this.menu).toBeInViewport();
    }

    async menuVisblewhenScrollUp()
    {
            await Promise.all([
            this.page.mouse.wheel(0,2000),
            this.page.waitForURL('**/floating_menu')
        ]);
        await Promise.all([
            this.page.mouse.wheel(0,-3000),
            this.page.waitForURL('**/floating_menu')
        ]);

        await expect(this.menu).toBeInViewport();
    }
}