//windows/tabs/pages are all same, 
// there are application that has elements which opens a new page and playwright script has a method to get into that page and we can perform normal operations

import {test, expect, chromium} from '@playwright/test'  

test("Handle Multiple windows or tabs or pages individually", async ()=>
{
     const browser=await chromium.launch()
     const context=await browser.newContext()

     const page1=await context.newPage()
     const page2=await context.newPage()

     const AllPages=await context.pages()
     console.log('Number of pages:', AllPages.length)

     await page1.goto('https://demo.automationtesting.in/Windows.html')
     await page2.goto("https://www.selenium.dev/")
     
     await expect(page1).toHaveTitle('Frames & windows')
     await expect(page2).toHaveTitle('Selenium')

     await browser.close()
}
)

test("Handle Multiple windows or tabs or pages", async ()=>
       {
            const browser=await chromium.launch()
            const context=await browser.newContext()
       
            const page1=await context.newPage()

            await page1.goto('https://demo.automationtesting.in/Windows.html')
            await expect(page1).toHaveTitle('Frames & windows')

            const pagepromise=context.waitForEvent('page')
            await page1.locator("(//button[@class='btn btn-info'][normalize-space()='click'])[1]").click()
            const page2=await pagepromise
            await page2.locator("//a[@aria-label='Selenium Community YouTube Channel']//i[@class='fab fa-youtube']").click()
            await expect(page2).toHaveTitle('Selenium')
       
            const AllPages=await context.pages()
            console.log('Number of pages:', AllPages.length)

            await browser.close()
       }
       )