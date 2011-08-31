var System = require('../../NotImplementedException.js');
	System.Web = System.Web || {};
	System.Web.Routing = System.Web.Routing || {};
	
System.Web.Routing.RouteBase = function () {	
	this.getRouteData = function(httpContext) {
		throw new System.NotImplementedException();
	};
};

module.exports = System;