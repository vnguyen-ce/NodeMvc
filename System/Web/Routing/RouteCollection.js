var Core = require('../../Core.js');

// Import 1 type of same namespace and add more class to that namespace
var System = require('../../../System');	
	System.extend(require('./RouteBase.js'));
	System.extend(require('./StopRoutingHandler.js'));
System.Web.Routing.RouteCollection = Core.inheritFrom(Array);
System.Web.Routing.RouteCollection.prototype._namedMap = new Array();	

// Summary:
//     Adds a route to the end of the System.Web.Routing.RouteCollection object
//     and assigns the specified name to the route.
//
// Parameters:
//   name:
//     The value that identifies the route. The value can be null or an empty string.
//
//   item:
//     The route to add to the end of the collection.
//
// Exceptions:
//   System.ArgumentNullException:
//     item is null.
//
//   System.ArgumentException:
//     name is already used in the collection.
System.Web.Routing.RouteCollection.prototype.AddByName = function(name /*route name*/, routeBase) {			
	if (routeBase == null || name == null || name == ''){
		throw new System.ArgumentNullException('name');
	}	
	if (routeBase == null){
		throw new System.ArgumentNullException('routeBase');
	}	
	var route = _getRoute(routeBase);	
	this.push(route);
	this._namedMap[name] = route;		
};

System.Web.Routing.RouteCollection.prototype.Add = function(routeBase) {			
	if (routeBase == null){
		throw new System.ArgumentNullException('routeBase');
	}	
	var route = _getRoute(routeBase);	
	this.push(route);
};

var _getRoute = function(routeBase) {
	var route = routeBase;
	if (!(routeBase instanceof System.Web.Routing.RouteBase)){
		if (typeof routeBase.Url === 'string' && 
			typeof routeBase.Defaults === 'object' &&
			routeBase.Url != '') 
		{
			route = new System.Web.Routing.Route(routeBase.Url); 
			route.Defaults = routeBase.Defaults;
		}
		else {
			throw new System.InvalidOperationException('Provided item is not an instance of System.Web.Routing.RouteBase');
		}
	}
	return route;
}

//
// Summary:
//     Removes all the elements from the System.Web.Routing.RouteCollection object.
System.Web.Routing.RouteCollection.prototype.ClearItems = function() {		
	this.splice(0, this.length);		
	this._namedMap = [];		
};	
	
//
// Summary:
//     Defines a URL pattern that should not be checked for matches against routes.
//
// Parameters:
//   url:
//     The URL pattern to be ignored.
System.Web.Routing.RouteCollection.prototype.Ignore = function(urlPattern){
	var ignoreRoute = new System.Web.Routing.Route(urlPattern);
	
	// TODO: Should implement a FileSystemHandler instead of using StopRoutingHandler
	ignoreRoute.RouteHandler = new System.Web.Routing.StopRoutingHandler();
	this.push(ignoreRoute);
};

//
// Summary:
//     Inserts the specified route into the System.Web.Routing.RouteCollection object
//     at the specified index.
//
// Parameters:
//   index:
//     The zero-based index at which item is inserted.
//
//   item:
//     The route to insert.
//
// Exceptions:
//   System.ArgumentNullException:
//     item is null.
//
//   System.ArgumentException:
//     item is already in the collection.
System.Web.Routing.RouteCollection.prototype.InsertItem = function(index, routeBase){
	if (routeBase == null){
		throw new System.ArgumentNullException('routeBase');
	}	
	var route = _getRoute(routeBase);	
	this.splice(index, 0, route);
};

//
// Summary:
//     Removes the route from the System.Web.Routing.RouteCollection object at the
//     specified index.
//
// Parameters:
//   index:
//     The zero-based index of the route to remove.
System.Web.Routing.RouteCollection.prototype.RemoveItem = function(index){
	this.splice(index, 1);
};	

//
// Summary:
//     Replaces the route at the specified index.
//
// Parameters:
//   index:
//     The zero-based index of the route to replace.
//
//   item:
//     The route to add at the specified index.
//
// Exceptions:
//   System.ArgumentNullException:
//     item is null.
//
//   System.ArgumentException:
//     item is already in the collection.
System.Web.Routing.RouteCollection.prototype.SetItem = function(index, routeBase){			
	if (routeBase == null){
		throw new System.ArgumentNullException('routeBase');
	}	
	var route = _getRoute(routeBase);	
	this[index] = route;
};

module.exports = System;