require('../../Core.js');
var Modules = {};

Modules.extend(require('./RouteValueDictionary.js'));
Modules.extend(require('./IRouteHandler.js'));
Modules.extend(require('./RouteBase.js'));
Modules.extend(require('./RouteData.js'));
Modules.extend(require('./RequestContext.js'));
Modules.extend(require('./Route.js'));
Modules.extend(require('./RouteCollection.js'));
Modules.extend(require('./RouteTable.js'));
Modules.extend(require('./Router.js'));
Modules.extend(require('./StopRoutingHandler.js'));


module.exports = Modules;