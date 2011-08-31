var Core = require('../Core.js');
var System = require('../NotImplementedException.js');
	System.Web = System.Web || {};
	
System.Web.IHttpHandler = Core.interface('IHttpHandler', {
	isReusable : false,	
	processRequest : function(httpContext){
		throw new System.NotImplementedException();
	}	
});

module.exports = System;