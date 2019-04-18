var mongoose = require('mongoose')

console.log('Schema Products called !');

var ProductsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    weight: { type: Number, required: true },
    measureUnity: { type: String, required: true },
    url: { data: Buffer, contentType: String }
});

var Products = mongoose.model('supermarket_products', ProductsSchema);


module.exports = Products;