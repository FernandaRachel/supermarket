const products = require('../db/models/products.model');

module.exports = {
    getAll: function(resp) {
        var search = products.find();
        search.exec(function(err, data) {
            console.log(data)
            if (err) {
                return err;
            }
            if (data) {
                return resp.send(data)
            } else {
                return resp.send({ message: 'Não há dados para a pesquisa feita' })
            }
        });
    },
    getByName: function(prodName, resp) {
        var search = products.find({ name: prodName });
        search.exec(function(err, data) {
            console.log(data)
            if (err) {
                return err;
            }
            if (data) {
                return resp.send(data)
            } else {
                return resp.send({ message: 'Não há dados para a pesquisa feita' })
            }
        });
    }
}