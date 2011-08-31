require('../../Linq/Enumerable.js');
var Core = require('../../Core.js');
var System = require('./PathSubsegment.js');	

System.Web.Routing.LiteralSubsegment = function(literal){		
	this.literal = literal
};

System.Web.Routing.LiteralSubsegment.inherit(System.Web.Routing.PathSubsegment);

module.exports = System;