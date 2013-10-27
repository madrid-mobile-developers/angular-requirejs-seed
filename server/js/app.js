var express = require('express');
var fs = require('fs');
//var open = require('open');
var routerDB = require('./routes/routesDb');

exports.start = function(PORT, STATIC_DIR) {
    var app = express();

    // all environments
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/partials');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    // log requests
    app.use(express.logger('dev'));
    // parse body into req.body
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    // gzip
    app.use(express.compress());
    // serve static files
    app.use(express.static(STATIC_DIR));

    // development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

    // route requests to database services
    routerDB(app);

    // start the server and open a browser
    app.listen(PORT, function() {
      //open('http://localhost:' + PORT + '/');
      console.log('Go to http://localhost:' + PORT + '/');
    });
};
