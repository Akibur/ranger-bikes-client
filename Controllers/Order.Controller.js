const createError = require('http-errors');
const mongoose = require('mongoose');

const Order = require('../Models/Order.model');

module.exports = {
    getAllOrders: async (req, res, next) => {
        try {
            const results = await Order.find({});
            res.send(results);
        } catch (error) {
            console.log(error.message);
        }
    },
    getAllUserOrders: async (req, res, next) => {
        try {
            const filter = { 'user.email': req.body.email };
            console.log(filter);
            const results = await Order.find(filter);
            res.send(results);
        } catch (error) {
            console.log(error.message);
        }
    },

    createNewOrder: async (req, res, next) => {
        try {
            const order = new Order(req.body);
            const result = await order.save();
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error.name === 'ValidationError') {
                next(createError(422, error.message));
                return;
            }
            next(error);
        }
    },

    findOrderById: async (req, res, next) => {
        const id = req.params.id;
        try {
            const order = await Order.findById(id);
            // const order = await order.findOne({ _id: id });
            if (!order) {
                throw createError(404, 'order does not exist.');
            }
            res.send(order);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid order id'));
                return;
            }
            next(error);
        }
    },

    updateAOrder: async (req, res, next) => {
        try {
            const id = req.params.id;
            const updates = req.body;
            const options = { new: false };

            const result = await Order.findByIdAndUpdate(id, updates, options);
            if (!result) {
                throw createError(404, 'Order does not exist');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                return next(createError(400, 'Invalid Order Id'));
            }

            next(error);
        }
    },

    deleteAOrder: async (req, res, next) => {
        const id = req.params.id;
        try {
            const result = await Order.findByIdAndDelete(id);
            if (!result) {
                throw createError(404, 'Order does not exist.');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid Order id'));
                return;
            }
            next(error);
        }
    }
};
