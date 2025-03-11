 // use the debugger option from selectors hub to freeze the page for inspecting the elements that auto hides when try to inspect

import {test, expect} from '@playwright/test'
test ('Handle Hidden Dropdown', async ({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("input[placeholder='Username']").fill('Admin')
    await page.locator("input[placeholder='Password']").fill('admin123')
    await page.locator("button[type='submit']").click()

    await page.locator("//span[normalize-space()='PIM']").click()
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click()
    await page.waitForSelector("//div[@role='listbox']//span")    // use the dubbger option from selectors hub to freeze the page for inspecting the elements that auto hides when try to inspect
    const hiddenlist=await page.$$("//div[@role='listbox']//span")
    //console.log(hiddenlist.length)
     for(const lists of hiddenlist)
     {
         const val=await lists.textContent()
         //console.log(val)
          if(val.includes('IT Manager'))
          {
            await lists.click()
            break
       }
     }

    // await page.waitForTimeout(3000)


}
)