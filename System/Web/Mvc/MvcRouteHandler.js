var Core = require('../../Core.js');
var System = require('../../Index.js');
	System.extend(require('./IRouteHandler'));
	
System.Web.Mvc.MvcRouteHandler = function() {};
System.Web.Mvc.MvcRouteHandler.Implement(System.Web.Mvc.IRouteHandler);

module.exports = System;