// beforeEach and afterEach hook concept by using this we can eliminate duplicate blocks and utilize re-usability code
// beforeEach will perform before every individual tests
// afterEach will perform after every individual tests

import {test,expect} from '@playwright/test'

let page;  //create a common global variable as 'page' since it can be used in multiple tests 
test.beforeEach(async ({browser})=> //direct page fixture will not work here so we must use browser and create a page fixture and can use in different tests
{
    page=await browser.newPage()
    await page.goto('https://www.demoblaze.com/')
    //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('Ranjitho')
    await page.locator('#loginpassword').fill('12345')
    await page.locator("//button[normalize-space()='Log in']").click()
}
)

test.afterEach(async ()=>
    {
        //Logout
        await page.locator('#logout2').click()
    })

test("Home Page Validation", async ()=>   // since page fixture is created in test.beforeEach no need to define here
     { 
          //Test 1 HomePage Validation
          const products=await page.$$('.card-title')
          expect(products.length).toBe(9)
          await page.waitForTimeout(1000)
     }
   )

test("Add to Cart", async()=> // since page fixture is created in test.before each no need to define here
     {
          //Test 2 Add to cart Validation
          await page.locator('//body[1]/div[5]/div[1]/div[2]/div[1]/div[3]/div[1]/a[1]/img[1]').click()
         await page.locator("//a[normalize-space()='Add to cart']").click()    
     }
    )


// Below is the same test without using HOOK concept

// test("Home Page Validation", async({page})=>
// {
//     await page.goto('https://www.demoblaze.com/')
//     //Login
//     await page.locator('#login2').click()
//     await page.locator('#loginusername').fill('Ranjitho')
//     await page.locator('#loginpassword').fill('12345')
//     await page.locator("//button[normalize-space()='Log in']").click()

//      //Test 1 HomePage Validation
//      const products=await page.$$('.card-title')
//      expect(products.length).toBe(9)
//      await page.waitForTimeout(1000)

//     //Logout
//      await page.waitForTimeout(1000)
//      await page.locator('#logout2').click()

// })

// testl("Add to Cart", async({page})=>
// {
//         await page.goto('https://www.demoblaze.com/')
//         //Login
//         await page.locator('#login2').click()
//         await page.locator('#loginusername').fill('Ranjitho')
//         await page.locator('#loginpassword').fill('12345')
//         await page.locator("//button[normalize-space()='Log in']").click()
    
//          //Test 2 Add to cart Validation
//          await page.locator('//body[1]/div[5]/div[1]/div[2]/div[1]/div[3]/div[1]/a[1]/img[1]').click()
//          await page.locator("//a[normalize-space()='Add to cart']").click()
//          await page.waitForTimeout(1000)
    
//         //Logout
//          await page.waitForTimeout(1000)
//          await page.locator('#logout2').click()
    
    
// })