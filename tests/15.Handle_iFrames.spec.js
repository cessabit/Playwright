import {test,expect} from '@playwright/test'
test.only("Handle iframes", async ({page})=>
{
    await page.goto('https://www.leafground.com/frame.xhtml')


      //approach 1: using frame URL
         const FrameURL= page.frame({url: 'https://www.leafground.com/default.xhtml'}).locator('[id="Click"]')
         await FrameURL.click();
         await expect(FrameURL).toHaveText('Hurray! You Clicked Me.')

        
     //approach 2: using frame name
        const Framename= page.frame('frame2').locator('[id="Click"]')
        await Framename.click();
        await expect(Framename).toHaveText('Hurray! You Clicked Me.')


    const TotalFrames= page.frames()
    console.log(TotalFrames.length)
}
)

//Example 2
test("Handle frames", async ({page})=>
  {
    await page.goto('https://ui.vision/demo/webtest/frames/')
  
    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    
    await frame1.locator('[name="mytext1"]').fill('Ranjith')
    await page.waitForTimeout(3000)
  })