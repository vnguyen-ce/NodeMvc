var Class = require('../../Class.js');
var System = System || {};
	System.Web = System.Web || {};
	System.Web.Routing = System.Web.Routing || {};
	
System.Web.Routing.RouteBase = function () {	
	var _routeBase = Class.extend({
		init: function(){						
		},
		
		GetRouteData: function(httpContext) {
			throw "Not implemented exception";
		}
	});			
	
	return new _routeBase();
}

module.exports = System;