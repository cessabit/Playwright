import { test, expect } from '@playwright/test';

test("Make My Trip", async ({ page }) => {
    await page.goto("https://www.makemytrip.com/");
    await page.waitForTimeout(2000);

    // Close modal if exists
    await page.locator(".commonModal__close").click();

    // Click on Hotels
    await page.locator("//span[@class='headerIconTextAlignment chNavText darkGreyText'][normalize-space()='Hotels']").click();
    await page.locator("#city").click();
    
    // Type "Mumbai" in the search box
    await page.getByPlaceholder("Where do you want to stay?").fill("Mumbai");

    await page.waitForTimeout(5000);
    
    // Wait for the dropdown list
    await page.waitForSelector("//div[@id='react-autowhatever-1']//p//span");
    
    // Select all matching elements
    const listbox = await page.$$("//div[@id='react-autowhatever-1']//p//span");
    
    // Extract text content from each element
    const listboxTexts = await Promise.all(
        listbox.map(async (element) => await element.textContent())
    );

    // Log the extracted text content
    console.log(listboxTexts);

 for (let i = 0; i < listboxTexts.length; i++)
   {
  if (listboxTexts[i] && listboxTexts[i].includes("Mumbai")) {
     await listbox[i].click();  // Click on the actual element, not the text
     break; // Stop after clicking the first match
  }

}
await page.waitForTimeout(2000)
await expect(page.locator("#city")).toBeVisible("Mumbai")
}
)

/*

});
*/

/*
import{test, expect} from '@playwright/test'

test('Auto suggest dropdown', async ({page})=>
{
 await page.goto('https://www.redbus.in/')
 await page.locator("#src").fill('palakkad')
 await page.waitForSelector('//ul[@class="sc-dnqmqq dZhbJF"]/li/div/text')

 const options=await page.$$('//ul[@class="sc-dnqmqq dZhbJF"]/li/div/text')
for(const option of options)
{
    const value=await option.textContent()
    console.log(value)
     if(value.includes('Kalakkad'))
     {
         await option.click()
         break;
     }
}

 await page.waitForTimeout(5000)
}
)
*/