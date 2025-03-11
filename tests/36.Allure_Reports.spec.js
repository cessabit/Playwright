/*
Allure Reports for Playwright -> https://allurereport.org/docs/playwright/

1) installation of "allure-playwright" module (open project terminal and run the below cmd) 
    
	npm i -D @playwright/test allure-playwright

2) Installing Allure command line (for windows) -> to run the allure commands in terminal

    npm install -g allure-commandline --save-dev
	
3) playwright.config.js
   
   reporter: [['allure-playwright', {outputFolder: 'allure-results'}]]
   
4) Run the tests
  
   npx playwright test tests/filename.js --project chromium

5) Generate Allure reports
 
   allure generate allure-results -o allure-report --clean
   
6) open allure report

   allure open allure-report

*/

import {test, expect} from '@playwright/test'
test('Build-In Reporters', async ({ page })=>
    {
       await page.goto('https://demo.xtrachef.com/XtraChefAccount/Account/LogOn');
       await expect(page).toHaveTitle('xtraCHEF by Toast');
    }
    )
    
    
test("Assertions", async ({ page })=>
        {
    
        await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')
        await expect(page).toHaveTitle('nopCommerce demo store. Register')
        }
        )
        
test("MultiOption Dropdown", async ({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')
        await expect(page).toHaveTitle('Automation Testing Practice')
        }
        )