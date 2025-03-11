import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { CartPage } from '../Pages/CartPage'

test("Page Object Model Test", async({page})=>
{
//Login
const login=new LoginPage(page)
await login.gotoLoginPage()
await login.Login('Ranjitho','12345')
await page.waitForTimeout(3000)

//Home
const productAdd=new HomePage(page)
await productAdd.AddProducttoCart('Nexus 6')
await page.waitForTimeout(5000)
await productAdd.gotoCart()
await page.waitForTimeout(3000)

//Cart
const cart=new CartPage(page)
const status=await cart.CheckInItems('Nexus 6')
expect(await status).toBe(true)
}
)



