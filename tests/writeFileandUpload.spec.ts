import {test} from './fixtures/herokuapp-fixtures';
import * as fs from 'fs';
import * as path from 'path';

const OUT_DIR = path.join(process.cwd(), 'test-results', 'UploadFiles');

function ensureDir() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

function writeTextFile(name: string, content = 'hello') {
  ensureDir();
  const p = path.join(OUT_DIR, name);
  fs.writeFileSync(p, content, 'utf8');
  return p;
}


test.describe('Heroku-App Write a File and Upload',()=>{

  test.beforeEach(async({homePage})=>{
    await homePage.navigateToHomePage();
    await homePage.clickOnFileUpload();

  })

test('TC-UP-03: Upload different file type', async ({writeandUpload }) => {

    const txtName = 'sample.txt';
    const txtPath = writeTextFile(txtName, 'text file content');

    await writeandUpload.uploadAndAssert(writeandUpload, txtPath, txtName);
 
  });

});