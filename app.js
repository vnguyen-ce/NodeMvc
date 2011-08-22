var http = require('http');
var System = require('./System'); 

// APP	
http.createServer(function (req, res) {
	var handler = new System.Web.SimpleHttpHandler();		
	handler.ProcessRequest(new System.Web.HttpContext(req, res));
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');