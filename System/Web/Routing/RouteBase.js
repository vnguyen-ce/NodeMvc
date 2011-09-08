var System = require('../../NotImplementedException.js');
	System.Web = System.Web || {};
	System.Web.Routing = System.Web.Routing || {};
	
function RouteBase() {	
	this.getRouteData = function(httpContext) {
		throw new System.NotImplementedException();
	};
};

System.Web.Routing.RouteBase = RouteBase;

System.Web.Routing.RouteBase.prototype.getType = function() {
	return new System.Type(/*base type*/null, 'RouteBase', 'System.Web.Routing.RouteBase');
};

module.exports = System;