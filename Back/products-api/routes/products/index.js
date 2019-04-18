const productService = require('../../services/products.service');
const products = require('../../db/models/products.model');
const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function(req, res) {
    productService.getAll(res);
});

console.log('Rota produtos OK');

module.exports = router;