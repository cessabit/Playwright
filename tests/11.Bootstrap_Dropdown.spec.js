import {test, expect} from '@playwright/test'
test("Bootstrap DropDown", async ({page})=>
{
   await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
   

//1) Check how many options in dropdown
await page.locator("//button[@title='HTML, CSS']").click()
const options=await page.locator('ul li label input')
await expect(options).toHaveCount(11)

//2) Check how many options in dropdown using JS array
const TotalCount=await page.$$('ul li label input')
await expect(TotalCount.length).toBe(11)

//3) Select single options from drop down
const select=await page.$$('ul li label')
for(const values of select)
{
    const list=await values.textContent()
    if(list.includes('Java'))
    {
        await values.click();
        break;
    }
}

//4) Select Multiple options from drop down
const display=await page.$$('ul li label')
for(const content of display)
{
    const lists=await content.textContent()
    console.log(lists)
    if(lists.includes('Java') || lists.includes('Angular'))
    {
        await content.click();
        break;
    }
}
await page.waitForTimeout(5000)

}
)