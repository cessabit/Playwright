import {test, expect} from '@playwright/test';

test("Display the product names", async ({ page })=>
{
    await page.goto('https://www.demoblaze.com/index.html');
 
    // RETRIEVE TOTAL NUMBER OF PRODUCTS IN HOME PAGE
    // waitForSelector() make sure that everything in the locators are made available for performing.
     
    await page.waitForSelector("//div[@id='tbodyid']//h4/a"); 
    var products=await page.$$("//div[@id='tbodyid']//h4/a");  //page.$$ is a method that allows you to query multiple elements from the page

    for(var product of products)
    {
        const productname=await product.textContent();
        console.log(productname);
    }

   //RETRIEVE TOTAL NUMBER OF Links IN HOME PAGE
//    var links=await page.$$('a');
//    for(var link of links)
//    {
//         var AllLinks=await link.textContent();
//         console.log(AllLinks);

//    }

}
)