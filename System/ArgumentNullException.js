var Core = require('./Core.js');
var System = require('./Exception.js');	

System.ArgumentNullException = function(argumentName) {
	this.message = argumentName + ' can not be null';	
};
	
System.ArgumentNullException.Inherit(System.Exception);

module.exports = System;