// domain/use-cases/GetAllProducts.ts
import { Product } from '../entities/Product'
import { GetAllProductsRepository } from '../repositories/GetAllProducts'

export class GetAllProducts {
  constructor(private getAllProductsRepository: GetAllProductsRepository) {}

  async execute(): Promise<Product[]> {
    return await this.getAllProductsRepository.getAllProducts()
  }
}

console.log("Test1")
// Gonna make authentication and delete products this week
// As well as implementing a better UI