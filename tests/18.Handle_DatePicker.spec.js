import{test, expect} from '@playwright/test'
test("Handle DataPicker", async ({page})=>
{
    await page.goto('https://jqueryui.com/datepicker/')
    
    //1) Simple approach to select the date if input box is allowed (Datepicker Enabled)
     //Note: The element is in frames so we have perform the below step
     const iframes=await page.frame({url: 'https://jqueryui.com/resources/demos/datepicker/default.html'}).locator("#datepicker")
     await iframes.click()
     await iframes.fill('01/01/2025')
     await page.waitForTimeout(2000)
 
    //2) Approach 2 if input box isn't available (Datepicker Disabled)
    //Note: The element is in frames so we have perform the below step
    const mainframe=page.frame({url: 'https://jqueryui.com/resources/demos/datepicker/default.html'})
    await mainframe.locator('#datepicker').click()

     const year='2025'
     const month='December'
     const date='4'

     while(true) //This is an infinite loop, which will keep running until the specified condition is met.
     {
        const months=await mainframe.locator('.ui-datepicker-month').textContent()
        const years=await mainframe.locator('.ui-datepicker-year').textContent()

        if(months==month && years==year)
        {
            break;
        }
            await mainframe.locator("a[title='Next']").click()

     }
     
     //Note: To select date below 3 approaches can be followed
     
     //Approach 1
     //await mainframe.locator("//a[@class='ui-state-default'][text()='4']").click()

     //Approach 2
     //await mainframe.locator(`//a[@class='ui-state-default'][text()='${date}']`).click() //note: for using var date we have to follow syntax  (` ${date} `)
     
     //Approach 3
     const dates=await mainframe.$$('.ui-state-default')

     for (let DD of dates)
     {
        
        if(await DD.textContent()==date)
        {
            await DD.click()
            break
        }
     }
}
)


test("Handle datapicker enabled and disabled", async({page})=>
{
    await page.goto('https://demo.automationtesting.in/Datepicker.html')
    
    //Example 1: DatePicker Enabled
    await page.locator('#datepicker2').fill('01/08/2025')
    await page.waitForTimeout(2000)

    //Example 2: DatePicker Disabled
    await page.locator('#datepicker1').click()

    const date='7'
    const month='July'
    const year='2026'
    
    while(true) //This is an infinite loop, which will keep running until the specified condition is met.
    {
        const CurrentMonth=await page.locator('.ui-datepicker-month').textContent()
        const CurrentYear=await page.locator('.ui-datepicker-year').textContent()
        
        if(CurrentMonth==month && CurrentYear==year)
        {
            break
        }
        await page.locator('[title="Next"]').click()
    }
    //Note: 3 approaches to select the date

    //Approach 1: by passing the direct value
    //await page.locator("//a[@class='ui-state-default'][text()='7']").click()
    //await page.waitForTimeout(2000)

    //Approach 2: by passing the variable (syntax)
    //await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click()
    //await page.waitForTimeout(2000)

    //Approach 3: by using looping method
    const dates=await page.$$('.ui-state-default')
    for(let DD of dates)
    {
        if(await DD.textContent()==date)
        {
            await DD.click()
            break
        }
    }

}
)