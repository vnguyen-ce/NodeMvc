require('../../Core.js');
var Modules = {};

Modules.extend(require('./RouteBase.js'));
Modules.extend(require('./Route.js'));
Modules.extend(require('./RouteCollection.js'));
Modules.extend(require('./RouteTable.js'));
Modules.extend(require('./Router.js'));

module.exports = Modules;