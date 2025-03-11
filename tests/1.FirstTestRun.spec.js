//we have to import required modules (@playwright/test) to access the feature and functionality for testing
//test and expect are 2 packages required from this module, test is for testig and expect is for validation

const {test,expect} = require('@playwright/test');

//async keyword will make a fn return a promise
//await keyword will make a fn wait for a promise 
//a Promise represents an asynchronous operation that will either be completed successfully (resolved) or fail

//for eg in the below await statement it will wait to execute until async {page} is loaded completely i,e return a promise
// spec.js file commonly used to indicate that the file contains test specifications (automated test cases written using Playwright’s testing framework)
// page fixture giving you access to a new browser page in each test.
test('Home Page', async ({ page })=>
{
   await page.goto('https://demo.xtrachef.com/XtraChefAccount/Account/LogOn');
   
   await expect(page).toHaveURL('https://demo.xtrachef.com/XtraChefAccount/Account/LogOn');

   const AppURL=page.url();
   console.log('Application URL:',AppURL);

   await expect(page).toHaveTitle('xtraCHEF by Toast');

   const AppTitle=page.title();
   console.log('Application Title:', await AppTitle);

   await page.close();
} 
)

// To run all the tests - npx playwright test 
// To run the specified test - npx playwright test tests/filename.spec.js i,e (1.FirstTestRun.spec.js)
// To run the specified test with headed mode - npx playwright test tests/1.FirstTestRun.spec.js --headed
// To run the specified test on specified browser - npx playwright test tests/1.FirstTestRun.spec.js --project=chromium
// To run the specified test on specified browser with debug - npx playwright test tests/1.FirstTestRun.spec.js --project=chromium --debug
//To open HTML report run: npx playwright show-report


