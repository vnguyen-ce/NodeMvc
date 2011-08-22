var Class = require('../Class.js');
var System = System || {};
	System.Web = System.Web || {};
	
System.Web.SimpleHttpHandler = function () {	
	var _handler = Class.extend({
		init: function(){},		
		IsReusable: true,
		ProcessRequest: function(httpContext){
			httpContext.HttpResponse.writeHead(200, {'Content-Type': 'text/plain'});
			httpContext.HttpResponse.end('Hello World\n');
		}
	});
	
	_handler.EnsureInterfaceIsImplemented(System.Web.IHttpHandler);
	return new _handler();
}

module.exports = System;