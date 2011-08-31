var System = System || {};
	System.Web = System.Web || {};
	
System.Web.HttpContext = function (request, response) {	
	this.httpRequest = request;
	this.httpResponse = response;
}

module.exports = System;