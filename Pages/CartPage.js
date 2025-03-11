exports.CartPage=class CartPage
{
   constructor(page)
   {
    this.page=page
    this.AddedItems='//tbody/tr/td[2]'
   }

   async CheckInItems(products)
   {
       
       const cartitems=await this.page.$$(this.AddedItems)
       for(const items of cartitems)
       {
        if(products==await items.textContent())
        {
            return true
        }
       }
   }


}