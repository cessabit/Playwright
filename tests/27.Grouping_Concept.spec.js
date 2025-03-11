//we can  Group related tests together like user login, product search, 
// or payment processing can help you maintain a cleaner test suite.


import {test,expect} from '@playwright/test'

test.describe('Login Tests', () => {
  
    test('Valid Login', async ({ page }) => {
      await page.goto('https://example.com/login');
      await page.fill('#username', 'validUser');
      await page.fill('#password', 'validPassword');
      await page.click('#login-button');
      await expect(page).toHaveURL('https://example.com/dashboard');
    });
  
    test('Invalid Login', async ({ page }) => {
      await page.goto('https://example.com/login');
      await page.fill('#username', 'invalidUser');
      await page.fill('#password', 'wrongPassword');
      await page.click('#login-button');
      await expect(page.locator('.error-message')).toBeVisible();
    });
  
  });