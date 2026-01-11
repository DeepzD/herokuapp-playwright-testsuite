import {test as base} from '@playwright/test';
import { expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import {ABTestingPage as ABTestPage} from '../pages/ABtesting-page';
import {AddRemoveElements as AddRemoveElePage} from '../pages/add-remove-elements-page';
import {BasicAuth} from '../pages/basic-auth-page';
import {BBrokenImages} from '../pages/broken-images-page';
import {CheckBoxes } from '../pages/checkboxes-page';  
import {ContectMenu} from '../pages/contextmenu-page';
import { DragAndDrop } from  '../pages/dran-and-drop-page';
import { DropDownList } from '../pages/dropDownList';
import {DynmicContent} from '../pages/dynamic-content-page';
import { DynamicControls } from '../pages/dynamic-controls-page';
import { EntryAd } from '../pages/entry-ad-page';
import { FileDownload } from '../pages/fileDownload-page';
import { FileUploader } from '../pages/fileUpload-page';
import { WriteFileAndUpload } from '../pages/WriteFileAndUpload-page';
import { FloatingMenu } from '../pages/floatingMenu-page';

type MyPages = {
 homePage : HomePage;
 abTestPage: ABTestPage;
 addRemoveElementPage :AddRemoveElePage;
 basicAuthPage : BasicAuth;
 brokenImages : BBrokenImages;
 checkBoxesPage : CheckBoxes;
 contextMenu : ContectMenu;
 dragAnddropPage : DragAndDrop;
 dropDownlist : DropDownList;
 dynamicContent : DynmicContent;
 dynamicControls: DynamicControls;
 entryAd: EntryAd;
 fileDownloader :FileDownload;
 fileUpload : FileUploader;
 writeandUpload : WriteFileAndUpload;
 floatingMenu : FloatingMenu;
}

export const test= base.extend<MyPages>({

    // override context with credentials
  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      httpCredentials: { username: 'admin', password: 'admin' },
    });
    await use(context);
    await context.close();
  },

    homePage: async({page},use) =>{
        const homePage =new HomePage(page);
        await use(homePage);
    },

    abTestPage: async({page },use)=>{
        const abTestPage = new ABTestPage(page);
        await use(abTestPage);
    },

    addRemoveElementPage:async({page},use)=>{
        const addRemoveElementPage=new AddRemoveElePage(page);
        await use(addRemoveElementPage);
    },

    basicAuthPage:async({page},use)=>{
        const basicAuthPage= new BasicAuth(page);
        await use(basicAuthPage);
    },

    brokenImages:async({page}, use)=>{
        const brokenImages = new BBrokenImages(page);
        await use(brokenImages);
    },

    checkBoxesPage:async({page},use) =>{
      const checkBoxesPage = new CheckBoxes(page);
      await use(checkBoxesPage);
    },

    contextMenu:async({page},use)=>{
      const contextMenu=new ContectMenu(page);
     },

    dragAnddropPage:async({page},use)=>{
      const dragAnddropPage = new DragAndDrop(page);
      await use(dragAnddropPage);
    },

    dropDownlist:async({page},use)=>{
      const dropDownlist = new DropDownList(page);
      await use(dropDownlist);
    },

    dynamicContent:async({page},use)=>{
      const dynamicContent = new DynmicContent(page);
      await use(dynamicContent);

    },

    dynamicControls:async({page},use)=>{
      const dynamicControls = new DynamicControls(page);
      await use(dynamicControls);
    },

    entryAd: async({page},use)=>{
      const entryAd =new EntryAd(page);
      await use(entryAd);
    },
   
    fileDownloader: async({page},use)=>{
      const fileDownloader = new FileDownload(page);
      await use(fileDownloader);
    },

    fileUpload : async({page},use)=>{
      const fileUpload = new FileUploader(page);
      await use(fileUpload);
    },

    writeandUpload: async({page},use) =>{
      const writeandUpload = new WriteFileAndUpload(page);
      await use(writeandUpload);
    },

    floatingMenu:async({page},use)=>{
      const floatingMenu = new FloatingMenu(page);
      await use(floatingMenu);
    }
});

