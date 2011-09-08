var Core = require('./Core.js');
var System = require('./Exception.js');	
	
System.NotImplementedException = Core.inheritFrom(System.Exception, 'NotImplementedException', 'System.NotImplementedException');

module.exports = System;