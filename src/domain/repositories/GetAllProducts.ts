// domain/repositories/GetAllProducts.ts
import { PrismaClient} from '@prisma/client'
import { Product } from '../entities/Product'

export class GetAllProductsRepository {
  constructor(private prisma: PrismaClient) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.prisma.product.findMany()
  }
}
