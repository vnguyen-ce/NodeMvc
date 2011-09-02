require('./Core.js')

var System = {};

// Include all classes in this folder
System.extend(require('./Exception.js'));
System.extend(require('./ArgumentException.js'));
System.extend(require('./NotImplementedException.js'));
System.extend(require('./NotSupportedException.js'));
System.extend(require('./InvalidOperationException.js'));
System.extend(require('./ArgumentNullException.js'));

module.exports = System;