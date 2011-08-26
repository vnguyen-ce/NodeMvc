var System = System || {};
	System.Web = System.Web || {};
	
System.Web.HttpContext = function (request, response) {	
	this.HttpRequest = request;
	this.HttpResponse = response;
}

module.exports = System;