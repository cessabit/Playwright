import {test, expect} from '@playwright/test'

test("Handle inputbox and radio btn)", async ({ page })=>
{

    await page.goto('https://demoqa.com/automation-practice-form')
    
    //Ex: validate the first name input box is visible,editable,enabled and not empty
    
    await expect(await page.locator('#firstName')).toBeVisible()
    await expect(await page.getByPlaceholder('First Name')).toBeEmpty()
    await expect(await page.locator('//input[@id="firstName"]')).toBeEnabled()
    await expect(await page.getByPlaceholder("First Name")).toBeEditable()

    await page.locator('#firstName').fill('Ranjith')

    //Ex: validate the radio button functions 
    //option male is checked // the 1st below statement can be also written as -> await page.check('//label[normalize-space()="Male"]')
    await page.locator('//label[normalize-space()="Male"]').check()  
    await expect(await page.locator('//label[normalize-space()="Male"]')).toBeChecked()
    await expect(await page.locator('//label[normalize-space()="Male"]').isChecked()).toBeTruthy()

    //option female 
    await expect(await page.locator('//label[normalize-space()="Female"]')).not.toBeChecked()
    await expect(await page.locator('//label[normalize-space()="Female"]').isChecked()).toBeFalsy()
}
)

test("Handle checkboxes", async ({ page })=>
{
    await page.goto('https://www.leafground.com/checkbox.xhtml')

    //Handling Single Check boxes
    await page.locator("//label[normalize-space()='Java']").check();
    
    await expect(await page.locator("//label[normalize-space()='Java']")).toBeChecked();
    await expect(await page.locator("//label[normalize-space()='Java']").isChecked).toBeTruthy();
    await page.locator("//label[normalize-space()='Java']").uncheck();

    await expect(await page.getByLabel('Python')).not.toBeChecked()
    await expect(await page.locator('//label[normalize-space()="Python"]').isChecked()).toBeFalsy()

   //Handling Multiple Check boxes
   const MultiCheckBox=[
    "//label[normalize-space()='Java']",
    "//label[normalize-space()='C-Sharp']",
    "//label[normalize-space()='Others']"
   ]

for(var select of MultiCheckBox)
{
    await page.locator(select).check();
}
await page.waitForTimeout(5000)

//To uncheck the selected checkboxes
for(var select of MultiCheckBox)
    {
        if(await page.locator(select).isChecked())
        {
        await page.locator(select).uncheck();
        }
}

await page.waitForTimeout(5000)
    
}
)