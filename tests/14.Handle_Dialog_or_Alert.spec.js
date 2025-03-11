//By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. 
// However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

import {test, expect} from '@playwright/test'

//Handling alert box
test('Handle dialog or alert box', async ({page}) =>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //Enabling dialog window handler
    page.on('dialog', async dialog=>
    {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    }
    )
    await page.locator('#alertBtn').click()

}
)

//Handling confirm box
test.skip('Handle dialog or confirmation box', async ({page}) =>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')
        //Enabling dialog window handler
        page.on('dialog', async dialog=>
        {
            expect(dialog.type()).toContain('confirm')
            expect(dialog.message()).toContain('Press a button!')
            await dialog.accept()
        }
        )
        await page.locator('#confirmBtn').click()
        await expect(page.locator('#demo')).toHaveText('You pressed OK!')

    }
    )

//Handling prompt box
test.skip('Handle dialog or prompt box', async ({page}) =>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')
        //Enabling dialog window handler
        page.on('dialog', async dialog=>
        {
            expect(dialog.type()).toContain('prompt')
            expect(dialog.message()).toContain('Please enter your name:')
            expect(dialog.defaultValue()).toContain('Harry Potter')
            await dialog.accept('Ranjith')
        }
        )
        await page.locator('#promptBtn').click()
        await expect(page.locator('#demo')).toHaveText('Hello Ranjith! How are you today?')

    }
    )