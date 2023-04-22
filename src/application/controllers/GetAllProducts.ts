import { Request, Response } from "express";
import { GetAllProducts } from "../../domain/use-cases/GetAllProducts"

export class GetAllProductsController {
  constructor(private getAllProductsUseCase: GetAllProducts) {}
    

  async getAllProducts(_req: Request, res: Response) {
    try {
      const products = await this.getAllProductsUseCase.execute();

      return res.status(200).json({ products });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
