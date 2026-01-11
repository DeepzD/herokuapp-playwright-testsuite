import {test} from './fixtures/herokuapp-fixtures';
import { FloatingMenu } from './pages/floatingMenu-page';

test.describe('Heroku-APP Floating Menu',()=>{

    test.beforeEach(async({homePage})=>{
        homePage.navigateToHomePage();
        homePage.clickFloatingMenu();

    });

    test.skip('verify Floating menu display in page Load',async({floatingMenu})=>{
        await floatingMenu.MenuVisible();
    });

    test.skip('Menu remains visible while scrolling down', async({floatingMenu})=>{
        await floatingMenu.menuVisblewhenScrollDown();
    });

    test(' Menu remains visible while scrolling up',async({floatingMenu})=>{
        await floatingMenu.menuVisblewhenScrollUp();
    });

});

