var System = require('./RouteTable.js');	
var RouteTable = System.Web.Routing.RouteTable;
	
System.Web.Routing.Router = function(){};
				
System.Web.Routing.Router.prototype.ResolveRequest = function(httpRequest){
	for(var i = 0; i < RouteTable.Routes.length; i++) {
		var routeUrl = RouteTable.Routes[i].Url;		
		var requestUrl = httpRequest.url;
		if (routeUrl == requestUrl) {
			return RouteTable.Routes[i];
		}		
	}
	// return null;
	
	// this if for debug
	return RouteTable.Routes[RouteTable.Routes.length - 1];
};

module.exports = System;