var mongoose = require('mongoose')

console.log('Schema Products called !');

var ProductsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    discount: Number,
    weight: Number,
    measureUnity: String
});

var Products = mongoose.model('supermarket_products', ProductsSchema);


module.exports = Products;