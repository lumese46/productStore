import express from "express";
// import the product model
import { createProducts } from '../controllers/products.controller.js';
import { getProducts } from '../controllers/products.controller.js';
import { deleteProduct } from '../controllers/products.controller.js';
import { updateProduct } from '../controllers/products.controller.js';

const router = express.Router();

// routes for post request
router.post("/", createProducts);

// create a route for deleting the product in the database
router.delete("/:id", deleteProduct);

// a route to get all products in the database
router.get("/", getProducts);

// route to update a product
router.put("/:id", updateProduct);
export default router;
