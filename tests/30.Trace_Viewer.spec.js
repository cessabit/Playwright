//Trace Viewer features -> Actions, Meta, Before, After, Locator, Pick Locator, call, Log, Error, Network, Source
// To know more abt trace viewer -> https://playwright.dev/docs/trace-viewer 
//for each test we can use trace viewer individually by configuring in playwright.config.js file under 'use' section
//add the following config-> trace: 'on' or 'off' or 'on-first-retry' or 'retain-on-failure' (any 1 values can be set based on scenario)
// 'off' - Do not record video.
// 'on' - Record video for each test.
// 'retain-on-failure' - Record video for each test, but remove all videos from successful test runs.
// 'on-first-retry' - Record video only when retrying a test for the first time.
// you can view the trace files under test-results of your project or with this command npx playwright show-trace 'provide the relative path of trace file' eg: npx playwright show-trace test-results\30.Trace_Viewer-Different-Locators-Example-chromium\trace.zip 
import {test, expect} from '@playwright/test';

test('Different Locators Example', async ({ page })=>
{

   await page.goto('https://www.demoblaze.com/index.html'); 
   await page.locator('id=login2').click();
   await page.locator('#loginusername').fill('Ranjitho');
   await page.fill("//input[@id='loginpassword']",'12345');
   await page.click("//button[normalize-space()='Log in']");
   const logout= page.locator("//a[@id='logout2']");
   await page.waitForTimeout(2000)
   await expect(logout).toBeVisible();
   
}
)