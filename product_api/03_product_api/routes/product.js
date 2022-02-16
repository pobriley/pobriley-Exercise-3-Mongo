import express from "express";
import Product from "../models/product.js";

const router = express.Router();

/**
 * Create = post
 * Read = get ==> Get all id / Get by id
 * Update = put
 * Delete = delete
 */
 
router.get("/", (req, res) => {
  res.send("RestfulAPI");
});

 //get all id
router.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

 //get all id
router.get("/products/:id",(req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
});

 //create
//http://localhost:5000/api/products
router.post("/products", async (req, res) => {
const payload = res.body;
const product = new Product(payload);
await product.save();
res.json( { message:"Product Added !!"});
});

//Update
router.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const payload = res.body;
  const product = await Product.findByIdAndUpdate(id, { $set: payload });
  res.json( { message: 'You are ${id} Number One !!' });
});

 //delete
router.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.json( { message: 'You are ${id} Number One !!' });
});
export default router;