var express = require('express');
var path = require('path')
var server = express();
var dist = path.join(__dirname, 'dist')
server.use(express.static(dist))
var serving = server.listen(8080);
console.log('serving at', serving);
