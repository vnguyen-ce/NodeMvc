var Class = require('../Class.js');
var System = System || {};
	System.Web = System.Web || {};
	
System.Web.HttpContext = function (request, response) {	
	var _httpContext = Class.extend({
		init: function(){
			this.HttpRequest = request;
			this.HttpResponse = response;
		},
	});
	return new _httpContext();
}

module.exports = System;