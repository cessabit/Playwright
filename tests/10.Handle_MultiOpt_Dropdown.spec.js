import {test, expect} from '@playwright/test'

test("MultiOption Dropdown", async ({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
//Multiple ways to select an option from dropdown
      await page.locator('#colors').selectOption(['Blue', 'Green', 'Red'])  // or await page.selectOption('#colors', ['Blue', 'Green'])
      await page.waitForTimeout(5000)

//Assertions
//1) Check number of options of dropdown - Approach 1 using JS Array
      const count= await page.$$('#colors option')
      console.log("Number of options:" + count.length)
      await expect(count.length).toBe(7)

//2) Check number of options of dropdown - Approach 2
      const TotalOptions=await page.locator('#colors option')
      await expect(TotalOptions).toHaveCount(7)

//3) Check presence of value in the dropdown - Approach 1     
      const content=await page.locator('#colors').textContent()
      await expect(content.includes('Red')).toBeTruthy()  
}
)


