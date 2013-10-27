var db = require('./connectDb');

ProductsProvider = function() {
    this.db = db;
};

ProductsProvider.prototype.getCollection = function(callback) {
    var db = this.db;
    this.db.open(function(err, client) {
        client.authenticate('marketpricesuser', 'marketpricesuser', function(err, success) {
            if (err) {
                console.log('Error to connect to marketprices db:' + err);
            }
        });
        db.collection('products', function(error, products_collection) {
            if( error ) callback(error);
            else callback(null, products_collection);
        });
    });
};

//find all products
ProductsProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, products_collection) {
        if ( error ) callback(error)
        else {
            products_collection.find().toArray(function(error, results) {
                if( error ) callback(error)
                else callback(null, results)
            });
        }
    });
};

//save new product
ProductsProvider.prototype.save = function(products, callback) {
    this.getCollection(function(error, products_collection) {
        if ( error ) callback(error)
        else {
            if ( typeof(products.length)=="undefined")
                products = [products];

            for( var i =0;i< products.length;i++ ) {
                products = products[i];
                products.created_at = new Date();
            }

            products_collection.insert(products, function() {
                callback(null, products);
            });
        }
    });
};

module.exports = ProductsProvider;