const express = require('express');
const router = express.Router();

const OrderController = require('../Controllers/Order.Controller');
const verifyToken = require('../utils/verifyToken');

//get a list of all orders
router.get('/', verifyToken, OrderController.getAllOrders);

//get a list of all orders by email
router.get('/user/:email', verifyToken, OrderController.getAllUserOrders);

//Create a new order
router.post('/', verifyToken, OrderController.createNewOrder);

//Get a order by id
router.get('/:id', verifyToken, OrderController.findOrderById);

//Update a order by id
router.patch('/:id', verifyToken, OrderController.updateAOrder);

//Delete a order by id
router.delete('/:id', verifyToken, OrderController.deleteAOrder);


module.exports = router;
