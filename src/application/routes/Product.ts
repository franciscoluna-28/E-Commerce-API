import express from "express";
import cors from "cors";
import { AddProductController } from "../controllers/AddProduct";
import { PrismaClient } from '@prisma/client';
import { AddProduct } from "../../domain/use-cases/AddProduct";
import { AddProductRepository } from "../../domain/repositories/AddProductRepository";
import { GetAllProductsRepository } from "../../domain/repositories/GetAllProducts";
import { GetAllProducts } from "../../domain/use-cases/GetAllProducts";
import { GetAllProductsController } from "../controllers/GetAllProducts";
import { Router } from "express";
import { DeleteProductRepository } from "../../domain/repositories/DeleteProductRepository";
import { DeleteProductUseCase } from "../../domain/use-cases/DeleteProduct";
import { DeleteProductController } from "../controllers/DeleteProduct";

const router = Router();
const prisma = new PrismaClient();

router.use(cors());
router.use(express.json());

// Add products
const addProductRepository = new AddProductRepository(prisma);
const addProductUseCase = new AddProduct(addProductRepository);
const addProductController = new AddProductController(addProductUseCase);

// Get all products
const getAllProductsRepository = new GetAllProductsRepository(prisma);
const getAllProductsUseCase = new GetAllProducts(getAllProductsRepository);
const getAllProductsController = new GetAllProductsController(getAllProductsUseCase);

// Delete product
const deleteProductRepository = new DeleteProductRepository(prisma);
const deleteProductUseCase = new DeleteProductUseCase(deleteProductRepository);
const deleteProductController = new DeleteProductController(deleteProductUseCase);

// Current routes
router.post("/add", addProductController.addProduct.bind(addProductController));
router.get("/get-all", getAllProductsController.getAllProducts.bind(getAllProductsController));
router.delete("/delete-by-id/:id", deleteProductController.deleteProduct.bind(deleteProductController));

export default router;
