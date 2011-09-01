require('../../Core.js');

var System = require('../../../System');
	System.extend(require('../../../System/Web/HttpContext.js'));
	System.extend(require('./IRouteConstraint.js'));
	System.extend(require('./Route.js'));
	System.extend(require('./RouteValueDictionary.js'));		
	System.extend(require('./RouteDirection.js'));		

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
	if (httpContext == null || !(httpContext instanceof System.Web.HttpContext)){
		throw new System.ArgumentNullException('httpContext');
	}
	
	if (route == null || !(route instanceof System.Web.Routing.Route)){
		throw new System.ArgumentNullException('route');
	}
	
	if (typeof parameterName != 'string'){
		throw new System.ArgumentNullException('parameterName');
	}
	
	if (routeValueDictionary == null || !(routeValueDictionary instanceof System.Web.Routing.RouteValueDictionary)){
		throw new System.ArgumentNullException('routeValueDictionary');
	}
	
	var parameterValueString;
	switch(routeDirection)
	{
		case System.Web.Routing.RouteDirection.incomingRequest:
			var predicate = function(method) {
				return method.toLowerCase() === httpContext.httpRequest.httpMethod.toLowerCase();
			};
			return this.allowedMethods.any(predicate);
			
		case System.Web.Routing.RouteDirection.urlGeneration:
			
			if (routeValueDictionary.containsKey(parameterName)) {				
				var parameterValueString = routeValueDictionary[parameterName];				
				if (typeof parameterValueString != 'string') {
					throw new System.InvalidOperationException('Parameter value must be string');
				}
				return this.allowedMethods.any(function(method){
					return method.toLowerCase() === parameterValueString.toLowerCase(); 
				});
			}	
			return true;
	}
	return true;	
};

module.exports = System;