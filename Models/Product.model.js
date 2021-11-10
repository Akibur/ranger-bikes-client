const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
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
    description: {
        type: String,
        required: true
    },
    reviews: {
        type: Number,
        default: 0,
        required: false
    },
    raiting: {
        type: Number,
        default: 0,
        required: false
    },
    category: {
        type: [String],
    },
});

const Product = mongoose.model('products', ProductSchema);
module.exports = Product;
