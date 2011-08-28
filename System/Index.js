require('./Core.js')

var System = {};

// Include all classes in this folder
System.extend(require('./Exception.js'));
System.extend(require('./NotImplementedException.js'));
System.extend(require('./NotSupportedException.js'));

module.exports = System;