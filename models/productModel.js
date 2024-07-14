const mongoose = require('mongoose');

// Product schema
const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: String, // It can be any currency
        required: true
    },
    isInstock: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

// Creating a product model
module.exports = mongoose.model('products', productSchema);