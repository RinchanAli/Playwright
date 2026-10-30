import { test as base, expect } from "@playwright/test";
import { Login_Page } from "../Pages/Login_Page";
export { expect};

//Defining type of my custom fixture
type myLoginFixture = {
    loggedInPage:any;
}

//extend the base test with my new fixture
export const test = base.extend<myLoginFixture>({
    loggedInPage: async ({page}: {page:any}, use:any) => {
    const loginPage = new Login_Page(page);
    await loginPage.navigateToLoginPage();
    await loginPage.LoginApplication("standard_user","secret_sauce");

    //Hand over the Pre authenticated page to our test
    await use(page);
    }
})