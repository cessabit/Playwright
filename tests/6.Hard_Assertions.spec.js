/*
Assertions will retry until the assertion passes, or the assertion timeout is reached.
If any 1 assertion gets failed during execution it will terminate the entire execution 
and ignore rest of the assertions.
*/

import {test, expect} from '@playwright/test'

test("Assertions", async ({ page })=>
    {

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')

    //1) expect(page).toHaveURL() -----> Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

    //2) expect(page).toHaveTitle()  ------> Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3) expect(locator).toBeVisible() -----> Element is visible
    const logo = await page.locator("//img[@alt='nopCommerce demo store']")
    await expect(logo).toBeVisible()

    //4) expect(locator).toBeEnabled() & expect(locator).toBeDisabled()  -------> Control is enabled or not
    const searchbox = await page.getByPlaceholder('Search store')
    await expect(searchbox).toBeEnabled()

    //5) expect(locator).toBeChcecked() ----> Element is checked 
    //CheckBox
    const Chkbox = await page.locator("//input[@id='Newsletter']")
    await expect(Chkbox).toBeChecked()

    //Radiobutton
    const radiobtn = await page.locator('#gender-male')
    await radiobtn.click()
    await expect(radiobtn).toBeChecked()

    //6) expect(locator).toHaveAttribute ---> Element has attribute
    const name=await page.getByText('First name:')
    await expect(name).toHaveAttribute('for', 'FirstName')
     
    //7) expect(locator).toHaveText() --- Element matches text (full text)
    const fulltxt=await page.locator('.footer-powered-by a')
    await expect(fulltxt).toHaveText('nopCommerce')

    //8) expect(locator).toContainText() --- Element contains text (partial text)
    const partialtxt=await page.locator('.footer-powered-by a')
    await expect(partialtxt).toContainText('Commerce')
    
    //9) expect(locator).toHaveValue(value)  ---> input has a value
    const query=await page.getByPlaceholder('Search store')
    await query.fill('iphone')
    await expect(query).toHaveValue('iphone')
 
    await page.waitForTimeout(5000)
    //10)expect(locator).toHaveCount()  ----> list of elements has given length
    const count=await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(count).toHaveCount(13)

}
)