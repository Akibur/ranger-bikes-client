const express = require('express');
const router = express.Router();
const verifyToken = require('../utils/verifyToken');


const ProductController = require('../Controllers/Product.Controller');

//get a list of all products
router.get('/', ProductController.getAllProducts);

//Create a new product
router.post('/', verifyToken, ProductController.createNewProduct);

//Get a product by id
router.get('/:id', ProductController.findProductById);

//Get products by category
router.get('/category/:category', ProductController.findProductsByCategory);

//Update a product by id
router.patch('/:id', verifyToken, ProductController.updateAProduct);

//Delete a product by id
router.delete('/:id', verifyToken, ProductController.deleteAProduct);


module.exports = router;
