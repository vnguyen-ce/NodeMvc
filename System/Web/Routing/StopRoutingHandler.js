require('../../Core.js');

var System = require('../../../System');
	System.extend(require('./RouteBase.js'));	
	System.extend(require('../IHttpHandler.js'));
	System.extend(require('../HttpContext.js'));

function StopRoutingHandler() {};

System.Web.Routing.StopRoutingHandler = StopRoutingHandler;

System.Web.Routing.StopRoutingHandler.implement(System.Web.IHttpHandler);

System.Web.Routing.StopRoutingHandler.prototype.processRequest = function(httpContext) {
	if (!(httpContext instanceof System.Web.HttpContext)){
		throw new System.InvalidOperationException('object is not an instance of System.Web.HttpContext');
	}
	
	httpContext.HttpResponse.writeHead(200, {'Content-Type': 'text/plain'});
	httpContext.HttpResponse.end('StopRoutingHandler');
};

module.exports = System;