var Core = require('../../Core.js');

// Import 1 type of same namespace and add more class to that namespace
var System = require('./RouteBase.js');	
	
System.Web.Routing.Route = Core.inheritFrom(System.Web.Routing.RouteBase);
				
System.Web.Routing.Route.prototype.GetRouteData = function(httpContext) {
	console.log("implement method GetRouteData")
};

module.exports = System;