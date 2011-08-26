var System = System || {};
	System.Web = System.Web || {};
	System.Web.Routing = System.Web.Routing || {};
	
System.Web.Routing.RouteBase = function () {	
	this.GetRouteData = function(httpContext) {
		throw "Not implemented exception";
	};
};

module.exports = System;