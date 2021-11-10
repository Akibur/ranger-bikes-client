const express = require('express');
const router = express.Router();

const OrderController = require('../Controllers/Order.Controller');

//get a list of all orders
router.get('/', OrderController.getAllOrders);

//get a list of all orders by email
router.post('/user', OrderController.getAllUserOrders);

//Create a new order
router.post('/', OrderController.createNewOrder);

//Get a order by id
router.get('/:id', OrderController.findOrderById);

//Update a order by id
router.patch('/:id', OrderController.updateAOrder);

//Delete a order by id
router.delete('/:id', OrderController.deleteAOrder);


module.exports = router;
