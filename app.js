var http = require('http');
var util = require('util');

var MvcApplication = require('./MvcApplication.js');

// APP	
http.createServer(function (req, res) {
	MvcApplication.HandleRequest(req, res);	
	console.log(util.inspect(process.memoryUsage()));
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');