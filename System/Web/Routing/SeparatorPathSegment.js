var Core = require('../../Core.js');
var System = require('./PathSegment.js');	

function SeparatorPathSegment(){
	// Internal class
};
System.Web.Routing.SeparatorPathSegment = SeparatorPathSegment;
System.Web.Routing.SeparatorPathSegment.inherit(System.Web.Routing.PathSegment);

module.exports = System;