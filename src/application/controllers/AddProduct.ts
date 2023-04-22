import { Request, Response } from "express";
import { AddProduct } from "../../domain/use-cases/AddProduct";

export class AddProductController {
  constructor(private addProductUseCase: AddProduct) {}

  async addProduct(req: Request, res: Response) {
    try {
      const { name, imageURL, category, price } = req.body;

      const product = await this.addProductUseCase.execute(
        name,
        imageURL,
        category,
        price
      );

      return res.status(201).json({ product });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
