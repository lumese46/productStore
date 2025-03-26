import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
},{
    timestamps: true // this will add createdAt and updatedAt fields to the schema
});

// create a model
const Product = mongoose.model("Product", productSchema);

export default Product;