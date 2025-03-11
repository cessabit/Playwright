exports.HomePage=class HomePage
{
     constructor(page)
     {
        this.page=page
        this.productList='.hrefch'
        this.addToCartbtn="//a[normalize-space()='Add to cart']"
        this.cart='#cartur'
     }

     async AddProducttoCart(ProductName)
     {
        const productsList=await this.page.$$(this.productList)
         for(const product of productsList) 
         {
            if(ProductName==await product.textContent())
            {
              await product.click()
              
              break
            }
         }
        await this.page.on('dialog', async dialog=>
        {
         if(dialog.message().includes('Product added'))
         {
           await dialog.accept()
         }
            
        })
        await this.page.locator(this.addToCartbtn).click()
     }
     
     async gotoCart()
     {
        await this.page.locator(this.cart).click()
     }
     
}