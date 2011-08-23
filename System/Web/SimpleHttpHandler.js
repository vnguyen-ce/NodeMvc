var Class = require('../Class.js');

// Import 1 namespace and add more class to that namespace
var System = require('./Routing') || {};	
	
System.Web.SimpleHttpHandler = function () {	
	var _handler = Class.extend({
		init: function(){},		
		IsReusable: true,
		ProcessRequest: function(httpContext){
			
			console.log('Route Table: -------------------------------------------\n');
			console.log(System.Web.Routing.RouteTable);
			console.log('--------------------------------------------------------\n');
			
			
			httpContext.HttpResponse.writeHead(200, {'Content-Type': 'text/plain'});
			httpContext.HttpResponse.end('Hello World\n');
		}
	});
	
	_handler.EnsureInterfaceIsImplemented(System.Web.IHttpHandler);
	return new _handler();
}

module.exports = System;