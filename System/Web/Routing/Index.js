require('../../Core.js');
var Modules = {};

Modules.extend(require('./RouteBase.js'));
Modules.extend(require('./Route.js'));
Modules.extend(require('./RouteCollection.js'));
Modules.extend(require('./RouteTable.js'));
Modules.extend(require('./Router.js'));
Modules.extend(require('./StopRoutingHandler.js'));
Modules.extend(require('./RouteValueDictionary.js'));

module.exports = Modules;