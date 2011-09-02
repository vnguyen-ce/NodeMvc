var Core = require('./Core.js');
var System = require('./ArgumentException.js');	

System.ArgumentNullException = function(argumentName, innerException) {
	this.paramName = argumentName;
	this.message = argumentName + ' can not be null';	
	this.innerException = innerException;
};
	
System.ArgumentNullException.inherit(System.ArgumentException);

module.exports = System;