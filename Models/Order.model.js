const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    user: {
        type: {},
        required: true
    },
    product: {
        type: {},
        required: true
    },
    status: {
        type: String,
        required: true
    },
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;
