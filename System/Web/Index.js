require('../Core.js')
var System = {};

System.extend(require('./Mvc/Index.js'));
System.extend(require('./IHttpHandler.js'));
System.extend(require('./SimpleHttpHandler.js'));	
System.extend(require('./HttpContext.js'));

module.exports = System;