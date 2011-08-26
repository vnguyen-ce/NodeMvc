// Import 1 type of same namespace and add more class to that namespace
var System = require('./RouteCollection.js');		

// Summary:
//     Stores the URL routes for an application.
System.Web.Routing.RouteTable = {
	// Summary:
	//     Gets a collection of objects that derive from the System.Web.Routing.RouteBase
	//     class.
	//
	// Returns:
	//     An object that contains all the routes in the collection.
	Routes: new System.Web.Routing.RouteCollection()
};

module.exports = System;