/**
 * Route requests to services
 */

var ProductsProvider = require('../services/products');

var productsProvider = new ProductsProvider();


/**
 * Route requests
 * @param app express application
 */
module.exports = function(app) {
    app.get('/products', function(req, res) {
        productsProvider.findAll(function(error, products) {
            if(!error) {
                res.send(products);
            }
        })
    });
}


