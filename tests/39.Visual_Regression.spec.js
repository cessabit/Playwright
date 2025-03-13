// Visual Regression Testing is the process of checking the UI aesthetics
// by comparing the current page scrennshot with the previously stored baseline image 

import  {test, expect} from  '@playwright/test'

test("Visual Regression Testing", async ({page})=>{

    await page.goto("https://www.demoblaze.com/")
    await expect(page).toHaveScreenshot("Irctc.png");

})