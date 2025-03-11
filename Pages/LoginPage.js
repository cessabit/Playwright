exports.LoginPage=class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.LoginLink='#login2'
        this.UserNameInput='#loginusername'
        this.PasswordInput='#loginpassword'
        this.LoginBtn="button[onclick='logIn()']"
    }

    async gotoLoginPage()
    { 
        await this.page.goto('https://www.demoblaze.com/')   
    }

   async Login(username,password)
   {
        await this.page.locator(this.LoginLink).click()
        await this.page.locator(this.UserNameInput).fill(username)
        await this.page.locator(this.PasswordInput).fill(password)
        await this.page.locator(this.LoginBtn).click()
   }
}