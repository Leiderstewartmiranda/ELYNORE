import { Router } from "express";
import {
  getProducts,
  createProduct,
  editProduct,
  deleteProduct,
} from "../controller/ProductsController.js";

const productsRouter = Router();

productsRouter.get("/getProducts", getProducts);
productsRouter.post("/createProduct", createProduct);
productsRouter.put("/editProduct/:id", editProduct);
productsRouter.delete("/deleteProduct/:id", deleteProduct);

export default productsRouter;
