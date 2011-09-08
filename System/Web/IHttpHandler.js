var Core = require('../Core.js');
var System = require('../NotImplementedException.js');
	System.Web = System.Web || {};
	
System.Web.IHttpHandler = Core.interface({
	isReusable : false,	
	processRequest : function(httpContext){
		throw new System.NotImplementedException();
	}	
}, 'IHttpHandler', 'System.Web.IHttpHandler');

module.exports = System;