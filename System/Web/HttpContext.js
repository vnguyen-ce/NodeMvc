var System = System || {};
	System.Web = System.Web || {};
	

function HttpContext(request, response) {	
	this.httpRequest = request;
	this.httpResponse = response;
};

System.Web.HttpContext = HttpContext;

System.Web.HttpContext.prototype.getType = function() {
	return {
		name: 'HttpContext',
		namespace: 'System.Web.HttpContext',
		baseType: null
	};			
}

module.exports = System;