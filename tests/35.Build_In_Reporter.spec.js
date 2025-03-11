/*
Playwright has build in reporters (list,line,dot,html,json,junit) can be used in 2 ways either via terminal or in playwright.config.js file

Syntax for Direct Terminal output
List- npx playwright test folderpath/filename --reporter=list
Line- npx playwright test folderpath/filename --reporter=line
Dot- npx playwright test folderpath/filename --reporter=dot
HTML- npx playwright test folderpath/filename --reporter=html
json- npx playwright test folderpath/filename --reporter=json
junit- npx playwright test folderpath/filename --reporter=junit

Below need to config in playwright.config.js file -> Syntax in Terminal output -> npx playwright test folderpath/filename
  reporter: 'list',
  reporter: 'line',
  reporter: 'dot',
  reporter: 'html',
  reporter: [['json', {outputFile: 'results.json'}]],
  reporter: [['junit', {outputFile: 'results.xml'}]],

Syntax for multiple reports in config file
  reporter: [['list'],['line'],['dot'],['html'],['junit', {outputFile: 'results.xml'}],['junit', {outputFile: 'results.xml'}]],
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