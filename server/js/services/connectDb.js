var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;

var server = new Server('ds027688.mongolab.com', 27688, {safe: true}, {auto_reconnect : true});
var db = new Db('marketprices', server);

module.exports = db;
