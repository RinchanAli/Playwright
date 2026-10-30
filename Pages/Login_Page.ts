import{Page, Locator} from '@playwright/test'

export class Login_Page {
    readonly page;
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    
    constructor(page:Page){
        this.page = page;
        this.usernameInput = page.getByPlaceholder("Username");
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginButton = page.locator("#login-button");
    }
    async navigateToLoginPage() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async LoginApplication(username:string, password:string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        
    }
}