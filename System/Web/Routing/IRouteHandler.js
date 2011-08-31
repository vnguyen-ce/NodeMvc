var Core = require('../../Core.js');
var System = require('../../NotImplementedException.js');
	System.Web = System.Web || {};
	
System.Web.Routing.IRouteHandler = Core.interface('IRouteHandler', {
	getHttpHandler: function(requestContext){
		// reutrn IHttpHandler
		throw new System.NotImplementedException();
	}	
});

module.exports = System;