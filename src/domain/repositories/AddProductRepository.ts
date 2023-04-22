import { Product, ProductServiceInterface } from '../entities/Product';
import { PrismaClient } from '@prisma/client';

interface AddProductInput {
  name: string;
  imageURL: string;
  category: string;
  price: number;
}

interface AddProductOutput {
  product: Product;
}

export class AddProductRepository implements ProductServiceInterface {
  constructor(private readonly prisma: PrismaClient) {}

  async addProduct(input: AddProductInput): Promise<AddProductOutput> {
    // Validate product information
    const product = await this.prisma.product.create({
      data: input,
    });

    return {
      product,
    };
  }
}
