import {test,expect} from '@playwright/test'
test("Drag and Drop", async ({page})=>
{
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/')

    const iframe=await page.frame({url: 'https://www.globalsqa.com/demoSite/practice/droppable/photo-manager.html'})
    const source=iframe.locator("//img[@alt='The peaks of High Tatras']")
    const source1=iframe.locator("//img[@alt='Planning the ascent']")
    const destination=iframe.locator("//div[@id='trash']")
    
    //Approach 1
    await source.dragTo(destination)

    //Approach 2
    await source1.hover()  //hover over the source element
    await page.mouse.down()   //hold  the source element

    await destination.hover() //hover over the destination element
    await page.mouse.up()      //release at the destination element

    await page.waitForTimeout(3000)
}
)