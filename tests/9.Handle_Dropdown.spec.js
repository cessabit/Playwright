import {test, expect} from '@playwright/test'

test("Multiple ways to handle dropdown" , async ({ page })=>
{
   
//Multiple ways to select an option from dropdown
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#country').selectOption('India') //selecting option by visible text
    await page.locator('#country').selectOption({value: 'usa'}) ///selecting option by value
    await page.locator('#country').selectOption({index: 2}) //selecting option by index
    await page.locator('#country').selectOption({label: 'Germany'}) //selecting option by label
    await page.selectOption('#country', 'India') //selecting option directly with locator and visible text

//Multiple ways to select an option from dropdown using looping
const selectoption=await page.$$('#country option')
for(const select of selectoption)
{
    const data=await select.textContent()
    if(data.includes('japan'))     //HTML -> <option value="canada">Canada</option> HERE when you use page.selectOption() by default u have to provide the value not visble text
    {
        await page.selectOption('#country', data)
        break;
    }
}

//Assertions
//1) Check number of options in dropdown - Approach 1 using JS Array
   const OptionList=await page.$$("#country option")     
   await expect(OptionList.length).toBe(10)

//2) Check number of options of dropdown - Approach 2
   const OptionsList=await page.locator("#country option")
   await expect(OptionsList).toHaveCount(10)
 
//3) Check presence of value in the dropdown - Approach 1
   const Display=await page.locator("#country").textContent()
   await expect(Display.includes('Brazil')).toBeTruthy()
   console.log(Display)

//4) Check presence of value in the dropdown - Approach 2 - using looping
     const loopopt=await page.$$("#country option")
     let status=false
     for(const loop of loopopt)
     {
       const value=await loop.textContent()
       if(value.includes('Brazil'))
       {
        status=true;
        break;
       }

     }
     
     expect(status).toBeTruthy()

})

// Example 2 make my trip 

// My Interview Question: Go to Makemytrip website -> click on Hotel -> enter mumbai in search -> select the price and choose ₹0-₹1500

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

    //await page.waitForTimeout(5000);
    
    // Wait for the dropdown list
    await page.waitForSelector("//div[@id='react-autowhatever-1']//p//span");
    
    // Select all matching elements
    const listbox = await page.$$("//div[@id='react-autowhatever-1']//p//span");
    
    // Extract text content from each element
    const listboxTexts = await Promise.all(
        listbox.map(async (element) => await element.textContent()));

    // Log the extracted text content
    console.log(listboxTexts);

 for (let i = 0; i < listboxTexts.length; i++)
   {
  if (listboxTexts[i] && listboxTexts[i].includes("Mumbai")) {
     await listbox[i].click();  // Click on the actual element, not the text
     break; // Stop after clicking the first match
  }

}
//await page.waitForTimeout(2000)

// validate the entered city is present
await expect(page.locator("#city")).toBeVisible("Mumbai")

//await page.waitForTimeout(3000)
await page.locator("//label[@for='appliedFilter']").click()
const pricelist=await page.$$('//div[@class="ppn"]/ul/li')
const ranges=await Promise.all(pricelist.map(async (Element)=> await Element.textContent()))
console.log(ranges)

for(let j=0; j<ranges.length; j++)
{
   if(ranges[j] && ranges[j].includes("₹0-₹1500"))
   {
    await pricelist[j].click()
    break;
   }
//await page.waitForTimeout(1000)
}
await page.click("#hsw_search_button")
await page.waitForTimeout(3000)
}
)