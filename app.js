var http = require('http');
var util = require('util');
// Include all namespaces in System folder
var System =  require('./System'); 
System.extend(require('./System/Web')); 
System.extend(require('./System/Web/Routing'));

// Register routes to route table
var RouteTable = System.Web.Routing.RouteTable;
RouteTable.Routes.Ignore('/favicon.ico');
RouteTable.Routes.Add('Default', new System.Web.Routing.Route('/controller/action/id'));


//console.log(RouteTable.Routes);
var router = new System.Web.Routing.Router();

// APP	
http.createServer(function (req, res) {
	var route = router.ResolveRequest(req);
	if (route == null) {
		// process by a FileSystemHandler;
		console.log('Will be implemented by a FileSystemHandler');
	}
	var handler = route.RouteHandler;
	if (handler == null){
		handler = new System.Web.SimpleHttpHandler(); 
	}
	
	handler.ProcessRequest(new System.Web.HttpContext(req, res));
	//console.log(util.inspect(process.memoryUsage()));
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');