import {Page, Locator,expect} from '@playwright/test';

export class HomePage {
    readonly page : Page;
    readonly pageHeading : Locator;
    readonly subHeading : Locator;
    readonly linkABTest : Locator;
    readonly linkAddRemoveElement: Locator;
    readonly linkBasicAuth : Locator;
    readonly linkBrokenImage : Locator;
    readonly linkCheckBoxes : Locator;
    readonly linkContextMenu : Locator;
    readonly linkDragandDrop : Locator;
    readonly linkDropdownlist :Locator;
    readonly linkDynamicContent : Locator;
    readonly linkDynamicControls : Locator;
    readonly linkDynamicLoading :Locator;
    readonly linkEntryAd : Locator;
    readonly linkFileDownload :Locator;
    readonly linkFileUpload : Locator;
    readonly linkFloatingMenu : Locator;
    readonly linkForgotPW : Locator;
    readonly linkFormAuthentication: Locator;
    readonly linkFrames :Locator;
    readonly linkGeolocation : Locator;
    readonly linkHorizontalSlider : Locator;
    readonly linkHovers : Locator;
    readonly linkInfiniteScroll :Locator;
    readonly linkInputs : Locator;
    readonly linkJQueryUIMenus :Locator;
    readonly linkJSAlerts :Locator;
    readonly linkEventError : Locator;
    readonly linkKeyPresses :Locator;
    readonly linkDOM : Locator;
    readonly linkMultipleWindows :Locator;
    readonly linkNestedFrames :Locator;
    readonly linkNotificationMsg :Locator;
    readonly linkRedirect :Locator;
    readonly linkSecureFileDownload :Locator;
    readonly linkShadowDOM :Locator;
    readonly linkShiftingContent :Locator;
    readonly linkSlowResources :Locator;
    readonly linkSortableDataTables :Locator;
    readonly linkStatusCodes :Locator;
    readonly linkTypos :Locator;
    readonly linkWYSIWYGEditor :Locator;


    constructor(page:Page)
    {
        this.page =page;

        //Locators
        this.pageHeading =  page.locator('h1');
        //getByRole('heading',{name :'Welcome to the-internet'});
        this.subHeading = page.locator('h2');
        //getByRole('heading', {name:'Available Examples'});
        this.linkABTest = page.getByRole('link', {name:'A/B Testing'});
        this.linkAddRemoveElement =page.getByRole('link',{name:'Add/Remove Elements'});
        this.linkBasicAuth = page.getByRole('link',{name:'Basic Auth'});
        this.linkBrokenImage = page.getByRole('link',{name:'Broken Images'});
        this.linkCheckBoxes = page.getByRole('link',{name:'Checkboxes'});
        this.linkContextMenu=page.getByRole('link',{name:'Context Menu'});
        this.linkDragandDrop=page.getByRole('link',{name:'Drag and Drop'});
        this.linkDropdownlist = page.getByRole('link',{name:'Dropdown'});
        this.linkDynamicContent = page.getByRole('link',{name:'Dynamic Content'});
        this.linkDynamicControls = page.getByRole('link',{name:'Dynamic Controls'});
        this.linkDynamicLoading = page.getByRole('link',{name:'Dynamic Loading'});       
        this.linkEntryAd = page.getByRole('link',{name:'Entry Ad'});
        this.linkFileDownload = page.getByRole('link',{name:'File Download',exact:true});
        this.linkFileUpload = page.getByRole('link',{name:'File Upload'});
        this.linkFloatingMenu = page.getByRole('link',{name:'Floating Menu'});
        this.linkForgotPW = page.getByRole('link', {name:'Forgot Password'});
        this.linkFormAuthentication = page. getByRole('link',{name:'Form Authentication'});
        this.linkFrames = page.getByRole('link',{name:'Frames'});
        this.linkGeolocation =page.getByRole('link',{name:'Geolocation'});
        this.linkHorizontalSlider = page.getByRole('link',{name:'Horizontal Slider'});
        this.linkHovers = page.getByRole('link',{name:'Hovers'});
        this.linkInfiniteScroll= page.getByRole('link',{name:'Infinite Scroll'});
        this.linkInputs = page.getByRole('link',{name:'Inputs'});
        this.linkJQueryUIMenus = page.getByRole('link',{name:'JQuery UI Menus'});
        this.linkJSAlerts = page.getByRole('link',{name:'JavaScript Alerts'});
        this.linkEventError = page.getByRole('link',{name:'JavaScript onload event error'});
        this.linkKeyPresses = page.getByRole('link',{name:'Key Presses'});
        this.linkDOM = page.getByRole('link',{name:'Large & Deep DOM'});
        this.linkMultipleWindows =page.getByRole('link',{name:'Multiple Windows'});
        this.linkNestedFrames =page.getByRole('link',{name:'Nested Frames'});
        this.linkNotificationMsg =page.getByRole('link',{name:'Notification Messages'});
        this.linkRedirect =page.getByRole('link',{name:'Redirect Link'});
        this.linkSecureFileDownload =page.getByRole('link',{name:'Secure File Download'});
        this.linkShadowDOM =page.getByRole('link',{name:'Shadow DOM'});
        this.linkShiftingContent =page.getByRole('link',{name:'Shifting Content'});
        this.linkSlowResources =page.getByRole('link',{name:'Slow Resources'});
        this.linkSortableDataTables =page.getByRole('link',{name:'Sortable Data Tables'});
        this.linkStatusCodes =page.getByRole('link',{name:'Status Codes'});
        this.linkTypos =page.getByRole('link',{name:'Typos'});
        this.linkWYSIWYGEditor =page.getByRole('link',{name:'WYSIWYG Editor'});

    }
    //Navigation
    async navigateToHomePage()
    {
        await this.page.goto('https://the-internet.herokuapp.com/');
        await expect(this.pageHeading).toBeVisible();
    }

    async verifyPageHedersVisible()
    {
        await expect(this.pageHeading).toBeVisible();
        await expect(this.pageHeading).toHaveText('Welcome to the-internet');
        await expect(this.subHeading).toBeVisible();
        await expect(this.subHeading).toHaveText('Available Examples');
    }

    async verifyListItemCount(expectedCount:number)
    {
        const list= await this.page.locator('#content ul li').count();
        expect(list).toBe(expectedCount);
    }
    //Actions
    async verifyABTestingLink() {   await this.linkABTest.click();  }
    async verifyAddRemoveElementLink()  {  await this.linkAddRemoveElement.click();    }
    async verifyBasicAuthLink() {   await this.linkBasicAuth.click();   }
    async verifyLinkBrokenImages()  {   await this.linkBrokenImage.click(); }
    async ClickOnCheckBoxesLink()   {   await this.linkCheckBoxes.click();  }
    async clickOnContextMenuLink()  {   await this.linkContextMenu.click();  }
    async clickOnDragandDrop()  {   await this.linkDragandDrop.click(); }
    async clickOnDropdownlistPage() {   await this.linkDropdownlist.click();    }
    async clcikOnDynamicContent()   {   await this.linkDynamicContent.click();  }
    async clickOnDynamicControls()  {   await this.linkDynamicControls.click(); }
    async clickonDynamicLoading()   {   await this.linkDynamicLoading.click();  }
    async clickonEntryAd()  {   await this.linkEntryAd.click(); }
    async clickOnFileDownload() {   await this.linkFileDownload.click();    }
    async clickOnFileUpload()   {   await this.linkFileUpload.click();  }
    async clickFloatingMenu()   {   await this.linkFloatingMenu.click();    }
    async clickOnForgotPassword()   {   await this.linkForgotPW.click();    }
    async clickOnFormAuthentication()   {   await this.linkFormAuthentication.click();  }
    async clickOnFrames()   {   await this.linkFrames.click();  }
    async clickOnGeolocation()   {   await this.linkGeolocation.click();  }
    async clickOnHorizontalSlider()   {   await this.linkHorizontalSlider.click();  }
    async clickOnHovers()   {   await this.linkHovers.click();  }
    async clickOnInfiniteScroll()   {   await this.linkInfiniteScroll.click();  }
    async clickOnInputs()   {   await this.linkInputs.click();  }
    async clickOnJQueryUIMenus()   {   await this.linkJQueryUIMenus.click();  }
    async clickOnJSAlerts()   {   await this.linkJSAlerts.click();  }
    async clickOnEventError()   {   await this.linkEventError.click();  }
    async clickOnKeyPresses()   {   await this.linkKeyPresses.click();  }
    async clickOnShadowDOM()   {   await this.linkDOM.click();  }
    async clickOnMultipleWindows()   {   await this.linkMultipleWindows.click();  }
    async clickOnNestedFrames()   {   await this.linkNestedFrames.click();  }
    async clickOnNotificationMsg()   {   await this.linkNotificationMsg.click();  }
    async clickOnSecureFileDownload   ()   {   await this.linkSecureFileDownload.click();  }
    async clickOnShiftingContent()   {   await this.linkShiftingContent.click();  }
    async clickOnSlowResources()   {   await this.linkSlowResources.click();  }
    async clickOnSortableDataTables()   {   await this.linkSortableDataTables.click();  }
    async clickOnkTypos()   {   await this.linkTypos.click();  }
    async clickOnWYSIWYGEditor()   {   await this.linkWYSIWYGEditor.click();  }

}