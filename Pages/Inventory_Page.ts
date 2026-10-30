import { Page, Locator } from "@playwright/test";

export class Inventory_Page {
    readonly page:Page;
    readonly productContainer:Locator;

    constructor(page:Page){
        this.page = page;

        //This property will contain locator of all the product container
        this.productContainer = page.locator('.inventory_item');
    }

        async addProductToCart(product_name:string)
    {
        const specific_Product = this.productContainer.filter({hasText:product_name});
        const AddToCartButton = specific_Product.getByRole('button', { name: 'Add to cart' });

        await AddToCartButton.click();

    }
}