var Core = require('../../Core.js');
var System = require('../../NotImplementedException.js');
	System.Web = System.Web || {};
	
System.Web.Routing.IRouteHandler = Core.interface({
	getHttpHandler: function(requestContext){
		// reutrn IHttpHandler
		throw new System.NotImplementedException();
	}	
}, 'IRouteHandler', 'System.Web.Routing.IRouteHandler');

module.exports = System;