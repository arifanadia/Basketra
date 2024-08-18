const { Router } = require("express");
const { getProducts } = require("../controllers/ProductController");


const productRoutes = Router();

productRoutes.get('/all-products' , getProducts)

module.exports = productRoutes;