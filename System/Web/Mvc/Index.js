require('../../Core.js');
var Modules = {};

// Include all classes in this folder
Modules.extend(require('./IRouteHandler.js'));
Modules.extend(require('./MvcRouteHandler.js'));

module.exports = Modules;