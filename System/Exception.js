require('./Core.js');
var System = System || {};	
	
System.Exception = function(message) {		
	this.Message = message;		
	this.StackTrace = new Error().stack;
}

module.exports = System;