require('../Core.js');

var System = require('./Routing');	
	System.extend(require('./IHttpHandler.js'));
	System.extend(require('./HttpContext.js'));
	
System.Web.SimpleHttpHandler = function() {	
};
System.Web.SimpleHttpHandler.implement(System.Web.IHttpHandler);
System.Web.SimpleHttpHandler.prototype.ProcessRequest = function(httpContext) {
	if (!(httpContext instanceof System.Web.HttpContext)){
		throw 'object is not an instance of System.Web.HttpContext';
	}
	
	httpContext.httpResponse.writeHead(200, {'Content-Type': 'text/plain'});
	httpContext.httpResponse.end('SimpleHttpHandler\nIt is: ' + new Date());
};

module.exports = System;