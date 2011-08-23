var Class = require('../../Class.js');

// Import 1 type of same namespace and add more class to that namespace
var System = require('./RouteBase.js') || {};	
	
System.Web.Routing.Route = function () {	
	var _routeBase = new System.Web.Routing.RouteBase();	
	return _routeBase.extend({					
		GetRouteData: function(httpContext) {
			console.log("implement method GetRouteData")
		}
	});		
}

module.exports = System;