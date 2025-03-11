import {test, expect} from '@playwright/test'
test("Mouse Hover", async ({page})=>
{
    await page.goto('https://demo.opencart.com/')
    const Desktop=await page.locator("//a[@class='nav-link dropdown-toggle'][normalize-space()='Desktops']")
    const Mackbook=await page.locator("//a[normalize-space()='Mac (1)']")

    //Mouse Hover Action
    await Desktop.hover()
    await Mackbook.hover()
    await page.waitForTimeout(3000)
}
)