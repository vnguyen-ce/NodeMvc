var Core = require('../../Core.js');
var System = require('../../Index.js');
	System.Web = System.Web || {};
	System.Web.Mvc = System.Web.Mvc || {};
	
System.Web.Mvc.IRouteHandler = Core.interface('IRouteHandler', {
	GetHttpHandler: function(requestContext){
		// return IHttpHandler;
		throw new System.NotImplementedException();
	}
});

module.exports = System;