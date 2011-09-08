var Core = require('./Core.js');
var System = require('./Exception.js');	
	
System.NotSupportedException = Core.inheritFrom (System.Exception, 'NotSupportedException', 'System.NotSupportedException');

module.exports = System;