//Build-in Annotation such as 
// only() - To run specific tests alone we can use only() anotations
// skip() - If we have multiple tests and need not to run some tests then we can use skip() anotations
// fail() - this annotation can be used mostly for negative test cases 
// slow() - marks the test as slow and triples the test timeout.


import{test,expect, chromium, firefox} from '@playwright/test'

/*
//only()
test.only("Test 1", async({page})=>
{
    console.log("This is test 1")
}
)

test.only("Test 2", async({page})=>
    {
        console.log("This is test 2")
    }
    ) 
*/

//skip() 

    test.skip("Test 3", async({page})=>
        {
            console.log("This is test 3")
        }
        )

//skip() used with condition
        test("Test 4", async({page, browserName})=>
            {
                if(browserName=='chromium')
                {
                    test.skip()
                }   
                console.log("This is test 4")
            }
            )

//fixme() marks the test as failing. Playwright will not run this test, Use fixme when running the test is slow or crashes.
            test.fixme("Test 5", async({page})=>
                {
                    console.log("This is test 5")
                }
                )
/*
//fail() when condition is true the test will fail, vice versa 
test("Test 6", async ({page,browserName})=>
    {
        if(browserName=='chromium')
        {
            test.fail()
        }
        console.log("This is test 5")
    }
    )
*/
//slow()  
//this is used when test take more than 30000 (30s) default time to execute, slow() will tripe the default timeouts        
//for the test 7 i have configured the default timeout to 3000 for testing
                test("Test 7", async({page})=>
                    {
                        test.slow()
                        await page.goto('https://demo.xtrachef.com/XtraChefAccount/Account/LogOn')
                    }
                    )