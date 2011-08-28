var Core = require('./Core.js');
var System = require('./Exception.js');	
	
System.NotImplementedExcepton = Core.inheritFrom(System.Exception);

module.exports = System;