// import express use the modular import 
import express from 'express';
// import dotenv package to connect to the database 
import dotenv from 'dotenv';
// import the database connection
import { connectDB } from './config/db.js'; 
// import product routes 
import productRoutes from './routes/products.route.js';

dotenv.config();

// create an instance of express 
const app = express();

// get port number from environment variable
const PORT = process.env.PORT || 5000;
// allows us to accept JSON data in the body
app.use(express.json());

// use the product routes
app.use("/api/products",  productRoutes);


// start sever on port 5000
app.listen(PORT, () =>{
    connectDB(); 
    console.log("server started at http://localhost:"+ PORT);
});