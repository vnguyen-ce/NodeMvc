require('./Core.js');
var System = System || {};	
	
System.Exception = function(message) {		
	this.message = message;		
	this.stackTrace = new Error().stack;
}

module.exports = System;