var Core = require('./Core.js');
var System = require('./Exception.js');	


function ArgumentException(message, paramName, innerException) {
	this.message = message;
	this.paramName = paramName;
	this.innerException = innerException;
};

System.ArgumentException = ArgumentException;
	
System.ArgumentException.inherit(System.Exception);

module.exports = System;