// Import 1 type of same namespace and add more class to that namespace
var System = System || {};
	System.Web = System.Web || {};
	System.Web.Routing = System.Web.Routing || {};

System.Web.Routing.PathSegment = function(){
	// Internal abstract class
}

module.exports = System;