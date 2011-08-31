var Core = require('../../Core.js');

// Import 1 type of same namespace and add more class to that namespace
var System = require('./RouteBase.js');	

System.Web.Routing.Route = function(url){
	this.url = url;
}
	
System.Web.Routing.Route.Inherit(System.Web.Routing.RouteBase);

// Gets or sets a dictionary of expressions that specify valid values for a URL parameter.
System.Web.Routing.Route.prototype.constraints = {};

// Gets or sets custom values that are passed to the route handler, but which are not used to determine whether the route matches a URL pattern.
System.Web.Routing.Route.prototype.dataTokens = {};

// Gets or sets the values to use if the URL does not contain all the parameters.
System.Web.Routing.Route.prototype.defaults = {};

// Gets or sets the object that processes requests for the route.
System.Web.Routing.Route.prototype.routeHandler = null;

System.Web.Routing.Route.prototype.getRouteData = function(httpContext) {
	console.log("implement method getRouteData")
};

module.exports = System;