import { ProductDeletionServiceInterface } from '../entities/Product';
import { PrismaClient } from '@prisma/client';

export class DeleteProductRepository implements ProductDeletionServiceInterface {
  constructor(private readonly prisma: PrismaClient) {}

  

  async deleteProduct(productId: number): Promise<void> {

    if (isNaN(productId)) {
        throw new Error("Invalid product ID");
      }
      
    await this.prisma.product.delete({
      where: {
        id: productId
      },
    });
  }
}