// Import 1 type of same namespace and add more class to that namespace
var System = require('../../ArgumentNullException.js');
	System.extend(require('../HttpContext.js'));
	System.extend(require('./RouteData.js'));
	

System.Web.Routing.RequestContext = function(httpContext, routeData){
	if (httpContext == null || !(httpContext instanceof System.Web.HttpContext)) {
		throw new System.ArgumentNullException("httpContext");
	}
	if (routeData == null || !(routeData instanceof System.Web.Routing.RouteData)) {
		throw new System.ArgumentNullException("routeData");
	}
	
	this.HttpContext = httpContext;
	this.RouteData = routeData;	
};

module.exports = System;