var Core = require('../../Core.js');

// Import 1 type of same namespace and add more class to that namespace
var System = require('../../InvalidOperationException.js');
	System.extend(require('./RouteValueDictionary.js'));
	System.extend(require('./RouteBase.js'));
	System.extend(require('./IRouteHandler.js'));

System.Web.Routing.RouteData = function(routeBase, routeHandler){
	
	if (routeBase != null && !(routeBase instanceof System.Web.Routing.RouteBase)) {
		throw new System.InvalidOperationException("First argument is not an instance of System.Web.Routing.RouteBase");
	}
	if (routeHandler != null && !(routeHandler instanceof System.Web.Routing.IRouteHandler)) {
		throw new System.InvalidOperationException("Second argument is not an instance of System.Web.Routing.IRouteHandler");
	}
	
	this.values = new System.Web.Routing.RouteValueDictionary();
	this.dataTokens = new System.Web.Routing.RouteValueDictionary();
	this.route = routeBase;
	this.routeHandler = routeHandler;	
}

System.Web.Routing.RouteData.prototype.getRequiredString = function(valueName) {
	if (this.Values.ContainsKey(valueName)) {			
		var str = this.Values[valueName];
		console.log(typeof this.Values[valueName]);
		if (str != null && str != '') {
			return str;
		}
	}
	throw new System.InvalidOperationException('valueName is required');
}

module.exports = System;