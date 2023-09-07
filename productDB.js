// to push the json data on the db and then use it in the controllers/products.js file

require("dotenv").config();
const connectDB = require('./db/connect');
const Product = require('./models/product');

const ProductJson = require('./products.json');

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URI);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log('success');
    } catch (error) {
        console.log(error);
    }

}

start();