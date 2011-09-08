var Core = require('../../Core.js');

// Import 1 type of same namespace and add more class to that namespace
var System = require('../../InvalidOperationException.js');
	System.extend(require('./RouteValueDictionary.js'));
	System.extend(require('./RouteBase.js'));	

function VirtualPathData(routeBase, virtualPath){	
	if (routeBase != null && !(routeBase instanceof System.Web.Routing.RouteBase)) {
		throw new System.InvalidOperationException("First argument is not an instance of System.Web.Routing.RouteBase");
	}
	if (virtualPath != null && typeof virtualPath != 'string') {
		throw new System.InvalidOperationException("Second argument is not an instance of string");
	}
	
	this.route = routeBase;
	this.virtualPath = virtualPath != null ? virtualPath : '';
	this.dataTokens = new System.Web.Routing.RouteValueDictionary();	
};

System.Web.Routing.VirtualPathData = VirtualPathData;


System.Web.Routing.VirtualPathData.prototype.getType = function() {
	return new System.Type(/*base type*/null, 'VirtualPathData', 'System.Web.Routing.VirtualPathData');
};

module.exports = System;