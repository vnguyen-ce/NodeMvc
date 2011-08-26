var Core = require('../Core.js');
var System = System || {};
	System.Web = System.Web || {};
	
System.Web.IHttpHandler = Core.interface('IHttpHandler', {
	IsReusable : false,	
	ProcessRequest : function(httpContext){
		throw 'Not implemented exception';
	}	
});

module.exports = System;