/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByLabel() to locate a form control by associated label's text.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import {test, expect} from '@playwright/test';

test("Build-in-locators", async ({ page })=>
{
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

   //page.getByAltText() to locate an element, usually image, by its text alternative.
   var logo= page.getByAltText('company-branding')
   await expect(logo).toBeVisible();

   //page.getByPlaceholder() to locate an input by placeholder.
   await page.getByPlaceholder('Username').fill('Admin')
   await page.getByPlaceholder('Password').fill('admin123')

   //page.getByRole() to locate by explicit and implicit accessibility attributes like button, links.
   await page.getByRole('button', {type:'submit'}).click()

   //page.getByText() to locate by text content.
   await page.getByText('(1) Pending Self Review').click();
   await page.getByText('My Info').click();

 //or --> await expect (await page.getByText('Anh Nguyen').toBeVisible())

   var DisplayContent=await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
   await expect (page.getByText(DisplayContent)).toBeVisible()
   console.log(DisplayContent)


   //page.getByTitle() to locate an element by its title attribute.
   await page.getByTitle('Help').click()

} 
)