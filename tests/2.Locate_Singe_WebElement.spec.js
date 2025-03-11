
import {test, expect} from '@playwright/test';

test('Different Locators Example', async ({ page })=>
{

   await page.goto('https://www.demoblaze.com/index.html'); 

   // Locating the elements using CSS property
   // Below 2 statements are same can use any 1 of them
   await page.locator('id=login2').click();
   //await page.click('id=login2');

   // Locating element using CSS for entering username 
   // Below 2 statements are same can use any 1 of them
   await page.locator('#loginusername').fill('Ranjitho');
   //await page.fill('#loginusername', 'Ranjitho');

   // Locating element and enter password using XPATH
   await page.fill("//input[@id='loginpassword']",'12345');

   // Locating element and click login button
   await page.click("//button[normalize-space()='Log in']");
   

   //check if the logout button is present 
   const logout= page.locator("//a[@id='logout2']");
   await expect(logout).toBeVisible();
   await page.close();

}
)