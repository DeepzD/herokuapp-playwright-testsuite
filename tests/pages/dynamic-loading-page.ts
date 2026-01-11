import{Page, Locator, expect} from '@playwright/test';

export class DynamicLoading{

readonly page: Page;
readonly linkExample1 : Locator;
readonly linkExample2 : Locator;
readonly startButton : Locator;
readonly textHelloWorld : Locator;

constructor(page:Page)
{
    this.page =page;
    this.linkExample1 = page.getByRole('link',{name:'Example 1: Element on page that is hidden'});
    this.linkExample2 = page.getByRole('link',{name:'Example 2: Element rendered after the fact'});
    this.startButton = page.getByRole('button',{name:'Start'});
    this.textHelloWorld = page.getByRole('heading',{name:'Hello World!'});
}

async pageLoad()
{
    await expect(this.linkExample1).toBeVisible();
    await expect(this.linkExample1).toBeVisible();
}

// Link 1 : Example 1

async startTriggersLoading()
{
    await expect(this.startButton).toBeVisible();
    await this.startButton.click();
    await expect(this.startButton).not.toBeVisible();
}

async HelloWorldVisible_Ex1()
{
    await expect(this.startButton).toBeVisible();
    await this.startButton.click();
    await expect(this.startButton).not.toBeVisible();
    await expect(this.textHelloWorld).toBeVisible();
}

async HelloWorldVisible_Ex2()
{
    await expect(this.startButton).toBeVisible();
    await this.startButton.click();
    await expect(this.startButton).not.toBeVisible();
    await expect(this.textHelloWorld).toHaveText("Hello World!");
}
}

