// beforeAll and afterAll hook concept by using this we can eliminate duplicate blocks and re-usability code
// beforeAll will perform only once before all the tests
// afterAll will perform only once after all the tests

import {test,expect} from '@playwright/test'

let page;  //created a global variable as page since it is used in multiple tests 
test.beforeAll(async ({browser})=>
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

test.afterAll(async ()=>
    {
        //Logout
        await page.locator('#logout2').click()
    })

test("Home Page Validation", async ()=>
     { 
          //Test 1 HomePage Validation
          const products=await page.$$('.card-title')
          expect(products.length).toBe(9)
          await page.waitForTimeout(1000)
     }
   )

test("Add to Cart", async()=>
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