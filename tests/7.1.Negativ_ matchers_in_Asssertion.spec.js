/*
In general, we can expect the opposite to be true by adding a .not to the front of the matchers:
*/

import {test, expect} from '@playwright/test'

test("Assertions", async ({ page })=>
    {

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')

    //1) expect(page).toHaveTitle()  ------> Page has title (given wrong title to validate)
    await expect(page).not.toHaveTitle('mopCommerce demo store. Register')

    //2) expect(locator).toHaveValue(value)  ---> input has a value (given wrong value to validate)
    const query=await page.getByPlaceholder('Search store')
    await query.fill('iphone')
    await expect(query).not.toHaveValue('iphone 13')

    }
)