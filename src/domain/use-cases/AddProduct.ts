import { Product } from "../entities/Product"
import { AddProductInterface, ProductServiceInterface } from "../entities/Product";

export class AddProduct implements AddProductInterface {
    constructor (private productService: ProductServiceInterface) {}

    async execute(name: string, imageURL: string, category: string, price: number): Promise<Product> {
        const { product } = await this.productService.addProduct({
            name,
            imageURL,
            category,
            price,
        });
        return product;
    }
}
