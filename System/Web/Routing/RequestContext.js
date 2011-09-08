// Import 1 type of same namespace and add more class to that namespace
var System = require('../../ArgumentNullException.js');
	System.extend(require('../HttpContext.js'));
	System.extend(require('./RouteData.js'));	

function RequestContext(httpContext, routeData){
	if (httpContext == null || !(httpContext instanceof System.Web.HttpContext)) {
		throw new System.ArgumentNullException("httpContext");
	}
	if (routeData == null || !(routeData instanceof System.Web.Routing.RouteData)) {
		throw new System.ArgumentNullException("routeData");
	}
	
	this.httpContext = httpContext;
	this.routeData = routeData;	
};
System.Web.Routing.RequestContext = RequestContext;


System.Web.Routing.RequestContext.prototype.getType = function() {
	return new System.Type(/*base type*/null, 'RequestContext', 'System.Web.Routing.RequestContext');
};

module.exports = System;