/*
Playwright supports test retries. When enabled, failing tests will be retried multiple times until they pass, 
or until the maximum number of retries is reached. 
By default failing tests are not retried.

# Give failing tests 3 retry attempts in terminal
npx playwright test tests/filename.js --retries=1 

# in playwright.config.js
retries: 3,

Playwright Test will categorize tests as follows:

"passed" - tests that passed on the first run;
"flaky" - tests that failed on the first run, but passed when retried; (mostly by network slowness or user interaction)
"failed" - tests that failed on the first run and failed all retries. (mostly test case itself has issues)

*/



import { test, expect } from '@playwright/test';

test('FirstCodegenScript', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('Ranjitho');
  await page.locator('#loginpassword').fill('12345');
  await page.waitForTimeout(3000)
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});