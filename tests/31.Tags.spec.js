//Sometimes you want to tag your tests to only run tests that have a certain tag. To tag a test, add @-token to the test title.

//To Run the specified test using tag name syntax --grep "@tagname"
//npx playwright test tests/31.Tags.spec.js --project chromium --grep "@sanity"

//To Run the specified test using tag that has multiple tags attached you can execulde by adding this --grep-invert "@regression"
//npx playwright test tests/31.Tags.spec.js --project chromium --grep "@sanity" --grep-invert "@regression"

import {test, expect} from '@playwright/test'

test("user login@sanity", async ({page})=>
{
    console.log("This is Test 1")
}
)

test("home page@sanity", async ({page})=>
{
    console.log("This is Test 2")
}
)

test("add to cart@smoke", async ({page})=>
{
    console.log("This is Test 3")
}
)

test("remove from cart@smoke", async ({page})=>
{
    console.log("This is Test 4")
}
)

test("user logout@sanity@smoke@regression", async ({page})=>
{
    console.log("This is Test 5")
}
)

