var Core = require('../../Core.js');

// Import 1 type of same namespace and add more class to that namespace
var System = require('./RouteValueDictionary.js');
	System.extend(require('../../InvalidOperationException.js'));

System.Web.Routing.RouteData = function(routeBase, routeHandler){
	
	this.Values = new System.Web.Routing.RouteValueDictionary();
	this.DataTokens = new System.Web.Routing.RouteValueDictionary();
	this.Route = routeBase;
	this.RouteHandler = routeHandler;	
}

System.Web.Routing.RouteData.prototype.GetRequiredString = function(valueName) {
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