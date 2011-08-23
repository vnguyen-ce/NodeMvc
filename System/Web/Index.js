require('../Core.js')
var System = {};

// Include all classes in this folder
System.extend(require('./IHttpHandler.js'));
System.extend(require('./SimpleHttpHandler.js'));	
System.extend(require('./HttpContext.js'));

module.exports = System;