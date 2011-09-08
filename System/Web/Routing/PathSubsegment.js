var System = require('../../Type.js');
	System.Web = System.Web || {};
	System.Web.Routing = System.Web.Routing || {};

function PathSubsegment(){	
	// Internal abstract class
};

System.Web.Routing.PathSubsegment = PathSubsegment;

System.Web.Routing.PathSubsegment.prototype.getType = function() {
	return new System.Type(/*base type*/null, 'PathSubsegment', 'System.Web.Routing.PathSubsegment');
};

module.exports = System;