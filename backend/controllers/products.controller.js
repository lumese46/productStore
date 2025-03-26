// import the product model
import mongoose from 'mongoose';
import Product from '../models/products.model.js'; 


// function to create a product
export const createProducts = async(req, res) =>{
    const product = req.body; // user will send this data to the server

    // validation of the data from the user
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({message: "All fields are required"});
    }
    // put in the product body that we got from the user 
    const newProduct = new Product(product);
    
    // save the data in the database
    try {
        await newProduct.save();
        res.status(201).json({success: true, product: newProduct});
    } catch (error) {
        console.error("Error: in create product ", error.message);
        res.status(500).json({success: false, error: error.message});
    }

}
// function to get all products
export const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, products});
    } catch (error) {
        console.log("Error in fetching products ", error.message);
        res.status(500).json({success: false, message: "server Error"});
    }
}
// function to delete a product
export const deleteProduct = async(req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid product id"});
    }

    try {
        // check for product in the database
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted"});
    } catch (error) {
        console.log("Error in deleting product ", error.message);
        res.status(500).json({success: false, message: "server Error"});
    }
}
// function to update a product
export const updateProduct = async(req, res) => {
    const {id} = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid product id"});
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, product: updatedProduct});
    } catch (error) {
        console.log("Error in updating product ", error.message);
        res.status(500).json({success: false, message: "server Error"});
    }
}