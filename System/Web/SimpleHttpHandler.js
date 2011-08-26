require('../Core.js');

var System = require('./Routing');	
	System.extend(require('./IHttpHandler.js'));
	System.extend(require('./HttpContext.js'));
	
System.Web.SimpleHttpHandler = function() {	
};
System.Web.SimpleHttpHandler.Implement(System.Web.IHttpHandler);
System.Web.SimpleHttpHandler.prototype.ProcessRequest = function(httpContext) {
	if (!(httpContext instanceof System.Web.HttpContext)){
		throw 'object is not an instance of System.Web.HttpContext';
	}
			
	console.log('Route Table: -------------------------------------------\n');
	console.log(System.Web.Routing.RouteTable);
	console.log('--------------------------------------------------------\n');
	
	
	httpContext.HttpResponse.writeHead(200, {'Content-Type': 'text/plain'});
	httpContext.HttpResponse.end('Hello World\n');
};

module.exports = System;