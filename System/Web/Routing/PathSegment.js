// Import 1 type of same namespace and add more class to that namespace
var System = require('../../Type.js');
	System.Web = System.Web || {};
	System.Web.Routing = System.Web.Routing || {};

function PathSegment(){
	// Internal abstract class
};

System.Web.Routing.PathSegment = PathSegment;

System.Web.Routing.PathSegment.prototype.getType = function() {
	return new System.Type(/*base type*/null, 'PathSegment', 'System.Web.Routing.PathSegment');
};


module.exports = System;