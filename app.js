var http = require('http');

// Include all namespaces in System folder
var System = require('./System'); 
System.extend(require('./System/Web')); 
System.extend(require('./System/Web/Routing'));

// Register routes to route table
var RouteTable = System.Web.Routing.RouteTable;
RouteTable.Routes.Add('item', new System.Web.Routing.Route());
RouteTable.Routes.InsertItem(0, 'Inserted Item');

// APP	
http.createServer(function (req, res) {
	var handler = new System.Web.SimpleHttpHandler();		
	handler.ProcessRequest(new System.Web.HttpContext(req, res));
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');