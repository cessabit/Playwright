 // Below three tests represents the following ways for taking -> page screenshot, full page screenshot, elment screenshot
 //Note: for each test we can take screenshot individually by configuring in playwright.config.js file under 'use' section add the following config-> screenshot: 'on' or 'off' or 'on-first-failure' or 'only-on-failure' (any 1 values can be set based on scenario)

import{test,expect} from '@playwright/test'
test("Page Screenshot", async ({page})=>
    {
        await page.goto('https://demo.opencart.com/')
        await page.waitForTimeout(2000)
        await page.screenshot({path: 'tests\\Screenshots\\'+Date.now()+'HomePage.png'}) //in path the 1st value is the absolute file location, Date.now() will give the timestamp in milliseconds format and last value is the file name, if Date.now() is not used the same page screenshot will get replaced everytime you run the test
    } 
    )
test("Full Page Screenshot", async ({page})=>
    {
        await page.goto('https://demo.opencart.com/')
        await page.waitForTimeout(10000)
        await page.screenshot({path: 'tests\\Screenshots\\'+Date.now()+'FullPage.png', fullPage: true}) //here additionally we used one more attribute (fullPage: true) for full page screenshot
    }
    )
test("Element Screenshot", async ({page})=>
    {
    await page.goto('https://www.demoblaze.com/')
    await page.waitForTimeout(2000)
    await page.locator("//body/div[@id='contcont']/div[@class='row']/div[@class='col-lg-9']/div[@id='tbodyid']/div[1]").screenshot({path: 'tests\\Screenshots\\'+Date.now()+'Element.png'}) 
    }
    )