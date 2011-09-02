var Core = require('./Core.js');
var System = require('./Exception.js');	

System.ArgumentException = function(message, paramName, innerException) {
	this.message = message;
	this.paramName = paramName;
	this.innerException = innerException;
};
	
System.ArgumentException.inherit(System.Exception);

module.exports = System;