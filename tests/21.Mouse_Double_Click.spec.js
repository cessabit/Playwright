import{test,expect} from '@playwright/test'
test("Mouse Double Click", async ({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const DoubleClickbtn= page.locator("//button[normalize-space()='Copy Text']")
    await DoubleClickbtn.dblclick()
    
    //Assertions
    const ValidateField=await page.locator('//input[@id="field2"]')
    await expect(ValidateField).toHaveValue('Hello World!')

    await page.waitForTimeout(3000)

}
)