var Core = require('../../Core.js');
var System = require('../../Index.js');
	System.extend(require('././Routing/IRouteHandler'));
	
System.Web.Mvc.MvcRouteHandler = function() {};
System.Web.Mvc.MvcRouteHandler.Implement(System.Web.Routing.IRouteHandler);

module.exports = System;