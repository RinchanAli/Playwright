import { test, expect } from "../Fixtures/Login_Fixture";
import { Inventory_Page } from "../Pages/Inventory_Page";

test("Products shouuld be add to Cart", async ({loggedInPage, page }) => {


    const inventoryPage = new Inventory_Page(page);

    await page.waitForLoadState("load");

    await inventoryPage.addProductToCart("Sauce Labs Bike Light");
    await inventoryPage.addProductToCart("Sauce Labs Bolt T-Shirt");


})