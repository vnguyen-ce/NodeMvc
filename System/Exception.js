require('./Core.js');
var System = require('./Type.js');	
	
function Exception(message)
{
	this.message = message;		
	this.stackTrace = new Error().stack;
}
	
System.Exception = Exception;

System.Exception.prototype.getType = function() {
	return new System.Type(/*base type*/null, 'Exception', 'System.Exception');
}

module.exports = System;