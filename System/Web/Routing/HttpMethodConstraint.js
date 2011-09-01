require('../../Core.js');

var System = require('../../../System');
	System.extend(require('./../HttpContext.js'));
	System.extend(require('./IRouteConstraint.js'));
	System.extend(require('./Route.js'));
	System.extend(require('./RouteValueDictionary.js'));		

System.Web.Routing.HttpMethodConstraint = function(/* string[] */allowedMethods) {
	if (!(allowedMethods instanceof Array)){
		throw new System.ArgumentNullException("allowedMethods");
	}

	this.allowedMethods = allowedMethods;	
};

System.Web.Routing.HttpMethodConstraint.implement(System.Web.Routing.IRouteConstraint);

System.Web.Routing.HttpMethodConstraint.prototype.match = /* bool */ function(/*HttpContext*/ httpContext, 
																			  /*Route*/ route, 
																			  /*string*/ parameterName, 
																			  /*RouteValueDictionary*/ routeValueDictionary, 
																			  /*RouteDirection*/ routeDirection) {				
	if (!(httpcontext instanceof System.Web.HttpContext)){
		throw new System.ArgumentNullException('httpContext');
	}
	
	if (!(route instanceof System.Web.Routing.Route)){
		throw new System.ArgumentNullException('route');
	}
	
	if (typeof parameterName != 'string'){
		throw new System.ArgumentNullException('parameterName');
	}
	
	if (!(route instanceof System.Web.Routing.RouteValueDictionary)){
		throw new System.ArgumentNullException('routeValueDictionary');
	}
	
	
	
	
};

module.exports = System;