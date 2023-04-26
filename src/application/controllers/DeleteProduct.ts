import { Response, Request } from "express";
import { DeleteProductUseCaseInterface } from "../../domain/entities/Product";

export class DeleteProductController {
    constructor(private deleteProductUseCase: DeleteProductUseCaseInterface) {}

    async deleteProduct(req: Request, res: Response) {
        const productId: number = Number(req.params.id);
        console.log(productId); 
        try {
          await this.deleteProductUseCase.execute(productId);
          res.status(200).json({ message: "Product deleted successfully" });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
      }
    }      
  