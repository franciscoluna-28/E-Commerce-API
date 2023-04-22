// domain/use-cases/GetAllProducts.ts
import { Product } from '../entities/Product'
import { GetAllProductsRepository } from '../repositories/GetAllProducts'

export class GetAllProducts {
  constructor(private getAllProductsRepository: GetAllProductsRepository) {}

  async execute(): Promise<Product[]> {
    return await this.getAllProductsRepository.getAllProducts()
  }
}
