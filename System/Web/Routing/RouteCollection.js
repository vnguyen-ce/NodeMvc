var Class = require('../../Class.js');

// Import 1 type of same namespace and add more class to that namespace
var System = require('./RouteBase.js') || {};	
	
System.Web.Routing.RouteCollection = function () {				
	var _routeCollection = function() {
		this._namedMap = new Array();
	};
	_routeCollection.prototype = new Array;
	
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
	_routeCollection.prototype.Add = function(name /*route name*/, routeBase) {			
		if (routeBase == null || name == null || name == ''){
			throw "Argument null exception";
		}	
		
		routeBase.EnsureInterfaceIsImplemented(new System.Web.Routing.RouteBase());
		
		this._namedMap[name] = routeBase;		
	};
	
	//
	// Summary:
	//     Removes all the elements from the System.Web.Routing.RouteCollection object.
	_routeCollection.prototype.ClearItems= function() {		
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
	_routeCollection.prototype.Ignore= function(urlPattern){
		throw "Not implemented exception";
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
	_routeCollection.prototype.InsertItem = function(index, routeBase){
		this.splice(index, 0, routeBase);
	};
	
	//
	// Summary:
	//     Removes the route from the System.Web.Routing.RouteCollection object at the
	//     specified index.
	//
	// Parameters:
	//   index:
	//     The zero-based index of the route to remove.
	_routeCollection.prototype.RemoveItem = function(index){
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
	_routeCollection.prototype.SetItem = function(index, routeBase){			
		this[index] = routeBase;
	};
	
	return new _routeCollection();
}

module.exports = System;