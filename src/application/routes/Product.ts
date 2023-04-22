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

const router = Router();
const prisma = new PrismaClient();

router.use(cors());
router.use(express.json());

const addProductRepository = new AddProductRepository(prisma);
const addProductUseCase = new AddProduct(addProductRepository);
const addProductController = new AddProductController(addProductUseCase);

const getAllProductsRepository = new GetAllProductsRepository(prisma);
const getAllProductsUseCase = new GetAllProducts(getAllProductsRepository);
const getAllProductsController = new GetAllProductsController(getAllProductsUseCase);

router.post("/add", addProductController.addProduct.bind(addProductController));
router.get("/get-all", getAllProductsController.getAllProducts.bind(getAllProductsController));

export default router;
