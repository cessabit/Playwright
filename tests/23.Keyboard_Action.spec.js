import{test, expect} from '@playwright/test'
test("Keyboard Actions", async({page})=>
{
    await page.goto('https://translate.google.co.in/?sl=auto&tl=en&op=translate')
    await page.locator("//textarea[@aria-label='Source text']").fill('Mindset is everything')


    // Keyboard Action Ctrl + A (select all the text)
    await page.keyboard.press('Control+A')

    // Keyboard Action Ctrl + C (Copy the text)
    await page.keyboard.press('Control+C')

    // Keyboard Action for TAB 
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    // Keyboard Action Ctrl + V (Paste the text)
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(2000)
}
)