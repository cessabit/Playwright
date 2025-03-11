/*
Step 1: Select the tests folder and open the terminal and type: npx playwright codegen 
Step 2: Now by default chromium browser will open along with the playwright inspector & record will be ON by default
Step 3: When you enter the app URL & proceed further, meanwhile the playwright inspector will auto generate the script based on our action in the browser.
Step 4: Once you complete the task, you can stop the record and copy the code manually & save to the file for testing
Step 5: Playwright allows to create a file before starting the auto script generation and other features such as which browser, language, devices, etc
Ex1: create file automatically -> In Terminal --> npx playwright codegen --output filepath/filename.spec.js (tests/5.FirstCodegenScript.spec.js)
Ex2: Specify browser, language -> In Terminal --> npx playwright codegen --output filepath/filename.spec.js --target javascript --browser chromium
Ex3: Specify device, language -> In Terminal --> npx playwright codegen --output filepath/filename.spec.js --target java --device iphone 13
*/



import { test, expect } from '@playwright/test';

test('FirstCodegenScript', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('Ranjitho');
  await page.locator('#loginpassword').fill('12345');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});