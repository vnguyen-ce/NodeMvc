var System = System || {};
	System.Web = System.Web || {};
	
System.Web.IHttpHandler = {
	IsReusable : false,	
	ProcessRequest : function(httpContext){}	
}

module.exports = System;