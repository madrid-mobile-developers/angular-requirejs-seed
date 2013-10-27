
var ProductsProvider = require('../services/products');

var productsProvider = new ProductsProvider();

var products = {
    "name": "botella3 de leche entera 1,5 litros",
    "price": 1.29,
    "currency": "EUR",
    "marketName": "Hiber",
    "marketId": 1,
    "categories": [
        {
            "id": 1,
            "name": "leche"
        }
    ]
};

productsProvider.save(products, function(error, products) {
    if (error) {
        console.log(error);
    } else {
        console.log(products);
    }
});