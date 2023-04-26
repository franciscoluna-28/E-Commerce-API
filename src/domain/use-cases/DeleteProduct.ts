import { DeleteProductUseCaseInterface } from "../entities/Product";
import { ProductDeletionServiceInterface } from "../entities/Product";

export class DeleteProductUseCase implements DeleteProductUseCaseInterface {
    constructor(private readonly productService: ProductDeletionServiceInterface) {}
  
    async execute(productId: number): Promise<void> {
      await this.productService.deleteProduct(productId);
    }
  }