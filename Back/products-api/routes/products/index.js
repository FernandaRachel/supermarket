const productService = require('../products');
const express = require('express');
// const router = express;
// const router = express;

module.exports = function(app) {

    app.get('/', function(req, res) {
        console.log('entrou');

        // productService.getAll();
        return res.send('Hello');
    })
    console.log('====================================');
    console.log('ROTAS OK');
    console.log('====================================');
}