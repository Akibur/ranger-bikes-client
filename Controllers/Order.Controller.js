const createError = require('http-errors');
const mongoose = require('mongoose');

const Order = require('../Models/Order.model');
const verifyToken = require('../utils/verifyToken');


module.exports = {
    getAllOrders: async (req, res, next) => {
        try {
            if (req.decodedEmail) {
                const results = await Order.find({});
                res.send(results);
            } else {
                res.status(401).json({ message: "User not Authorized" });
            }

        } catch (error) {
            console.log(error.message);
        }
    },
    getAllUserOrders: async (req, res, next) => {
        const email = req.params.email;
        try {
            if (email == req.decodedEmail) {
                const filter = { 'user.email': email };
                console.log(filter);
                console.log(req.decodedEmail);
                const results = await Order.find(filter);
                res.send(results);
            } else {
                res.status(401).json({ message: "User not Authorized" });
            }

        } catch (error) {
            console.log(error.message);
        }
    },

    createNewOrder: async (req, res, next) => {
        try {
            if (req.decodedEmail) {

            } else {
                res.status(401).json({ message: "User not Authorized" });

            }

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
            if (req.decodedEmail) {
                const order = await Order.findById(id);
                // const order = await order.findOne({ _id: id });
                if (!order) {
                    throw createError(404, 'order does not exist.');
                }
                res.send(order);
            } else {
                res.status(401).json({ message: "User not Authorized" });

            }

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
            if (req.decodedEmail) {
                const id = req.params.id;
                const updates = req.body;
                const options = { new: false };

                const result = await Order.findByIdAndUpdate(id, updates, options);
                if (!result) {
                    throw createError(404, 'Order does not exist');
                }
                res.send(result);
            } else {
                res.status(401).json({ message: "User not Authorized" });

            }

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
            if (req.decodedEmail) {
                const result = await Order.findByIdAndDelete(id);
                if (!result) {
                    throw createError(404, 'Order does not exist.');
                }
                res.send(result);
            } else {
                res.status(401).json({ message: "User not Authorized" });

            }



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
