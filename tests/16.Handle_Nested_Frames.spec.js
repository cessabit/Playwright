import {test, expect} from '@playwright/test'

test("Handle nested frames", async ({page})=>
{
  await page.goto('https://ui.vision/demo/webtest/frames/')

  const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
  const childframe=frame3.childFrames()
  console.log(childframe.length)
  await childframe[0].locator('#i6').check()
  await page.waitForTimeout(3000)
})