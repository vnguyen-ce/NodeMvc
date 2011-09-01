var Core = require('../../Core.js');
var System = require('../../NotImplementedException.js');
	System.Web = System.Web || {};
	System.Web.Routing = System.Web.Routing || {};
	
System.Web.Routing.IRouteConstraint = Core.interface('IRouteConstraint', {
	match: /* bool */ function( /*HttpContext*/ httpContext, /*Route*/ route, /*string*/ parameterName, /*RouteValueDictionary*/ routeValueDictionary, /*RouteDirection*/ routeDirection) {		
		throw new System.NotImplementedException();
	}	
});

module.exports = System;