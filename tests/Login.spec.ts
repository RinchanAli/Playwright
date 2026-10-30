import { test, Locator, expect } from "@playwright/test";
import { Login_Page } from "../Pages/Login_Page";
import * as LoginData from '../Test_Data/LoginData.json'

test(`Verify Login with UserName: and Password: `, async ({page}) =>{

    //Creating Login_Page Object
    const loginpage = new Login_Page(page)

    //Performin Login action
    await loginpage.navigateToLoginPage();
    await loginpage.LoginApplication(LoginData["Valid Data"].username, LoginData["Valid Data"].password);

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page).toHaveTitle("Swag Labs");
})