/*
By default, failed assertion will terminate test execution. 
But if soft assertions failed it will  not terminate test execution, 
but mark the test as failed.and continue executing rest of the assertions.
*/


import {test,expect} from '@playwright/test'

test("Soft Assertions", async ({ page })=>
{
     await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')
     await expect.soft(page).toHaveTitle('nopCommerce demo store. Register')
     
     const text=await page.locator("//strong[normalize-space()='Company Details']")
     await expect.soft(text).toHaveText('Company Detail')

     await expect.soft(await page.getByText('Privacy notice')).toBeVisible()

}
)