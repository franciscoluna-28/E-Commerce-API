// Product definition
export interface Product {
    id: number;
    name: string;
    imageURL: string;
    category: string;
    price: number;
  }
  
  // Definition for adding a product
  export interface AddProductInterface {
    execute(name: string, imageURL: string, category: string, price: number): Promise<Product>;
  }
  
  // Definition for the service of adding a product
  export interface ProductServiceInterface {
    addProduct(data: { name: string, imageURL: string, category: string, price: number }): Promise<{ product: Product }>;
  }
  
  // Definition for deleting a product in the repository
  export interface ProductDeletionServiceInterface {
    deleteProduct(productId: number): Promise<void>;
  }

  // Use - case definition for deleting a product
  export interface DeleteProductUseCaseInterface {
    execute(productId: number): Promise<void>;
  }