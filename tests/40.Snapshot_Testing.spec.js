// Snapshot Testing is the process of checking the specific element like button 
// by comparing the current element screenshot with the previously stored baseline image 

import  {test, expect} from  '@playwright/test'

test("Visual Regression Testing", async ({page})=>{

    await page.goto("https://www.demoblaze.com/")
    const logo= page.locator('//a/img [@src="bm.png"]')
    expect(await logo.screenshot()).toMatchSnapshot("logo.png")

})