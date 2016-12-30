var express = require('express');
var path = require('path')
var server = express();
var port = process.env.PORT || 8080;
var dist = path.join(__dirname, 'dist')
server.use(express.static(dist))
var serving = server.listen(port);
console.log('serving at', port);
