import {test, expect} from '@playwright/test'
test("Handling Pagination table", async ({page})=>
{
   await page.goto('https://testautomationpractice.blogspot.com/') 

   const ProductTable=await page.locator('#productTable')

   //1) check the number of rows & columns in pagination table and validate

   const rows=await ProductTable.locator('tbody tr')
   console.log("Total number of rows:", await rows.count())
   expect(await rows.count()).toBe(5)
  

   const column=await ProductTable.locator('thead tr th')
   console.log("Total number of columns:", await column.count())
   expect(await column.count()).toBe(4)

   
    //2) Select check box for single product in a table

     const matchedrow= rows.filter(
       {
        has: page.locator('td'),
        hasText: 'Tablet' 
      } 
     )
     await matchedrow.locator('input').check()
     await page.waitForTimeout(3000)
 
  //3) select multiple products using re-usable function for that we have to create a funtion outside the test block
  await SelectMultiProducts(rows, page, 'Smartphone')
  await SelectMultiProducts(rows, page, 'Laptop')
  await SelectMultiProducts(rows, page, 'Smartwatch')

 //4) print all products details from page 1 in table using looping
for(let i=0; i<await rows.count();i++)
{
  const row= rows.nth(i) //rows.nth(i): Retrieves the i-th row in the table.
  const tds= row.locator('td') //This locates all the <td> elements within the current row.

  for(let j=0; j<await tds.count()-1;j++) //We subtract 1 here because the last <td> is typically a non-product column.
  {
      console.log(await tds.nth(j).textContent())

  }
}
 
//5) Display all the product details from all pages in the table

const pages= page.locator('#pagination li a')
console.log("Total number of pages:", await pages.count())

for(let p=0; p<await pages.count(); p++)
{
     if(p>0)  //i,e 0>0 ->it fails and will skip because pages.nth(0) {page[0]} is page 1 and then iterate 0+1, now 1>0 it will process 
     {
     await pages.nth(p).click()    //nth(p) i,e nth(1) is page number 2 
     }

for(let i=0; i<await rows.count();i++)
  {
    const row= rows.nth(i) //rows.nth(i): Retrieves the i-th row in the table.
    const tds= row.locator('td') //This locates all the <td> elements within the current row.
  
    for(let j=0; j<await tds.count()-1;j++) //We subtract 1 here because the last <td> is typically a non-product column.
    {
        console.log(await tds.nth(j).textContent())
  
    }
  }

}}
)

async function SelectMultiProducts(rows, page, name)
{
  const multiselect=rows.filter(
    {
      has: page.locator('td'),
      hasText: name
    }
  )
    await multiselect.locator("input").check()
  
    await page.waitForTimeout(3000)
}
