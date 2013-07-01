var PORT = process.argv[2] && parseInt(process.argv[2], 10) || 3000;
var STATIC_DIR = __dirname + '/../../client/app';

require('./app').start(PORT, STATIC_DIR);
