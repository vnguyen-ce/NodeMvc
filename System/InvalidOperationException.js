var Core = require('./Core.js');
var System = require('./Exception.js');	

System.InvalidOperationException = Core.inheritFrom(System.Exception);
module.exports = System;