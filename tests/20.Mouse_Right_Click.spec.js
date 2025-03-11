import{test,expect} from '@playwright/test'
test("Mouse Right Click Action", async ({page})=>
{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    const RightClickMeButton= page.locator("//span[@class='context-menu-one btn btn-neutral']")

    //Right Click Action
    await RightClickMeButton.click({button:'right'})
    await page.waitForTimeout(3000)


}
)