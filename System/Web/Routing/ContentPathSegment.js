require('../../Linq/Enumerable.js');
var Core = require('../../Core.js');
var System = require('./PathSegment.js');
	System.extend(require('./PathSubsegment.js'));
	System.extend(require('./ParameterSubsegment.js'));
	System.extend(require('../../../System'));

System.Web.Routing.ContentPathSegment = function(subsegments){	
	if (subsegments == null || !(subsegments instanceof Array)) {
		throw new System.ArgumentNullException(subsegments);
	}
	
	if (subsegments.length > 0 && !subsegments.any(function(x) {			
			return (x instanceof System.Web.Routing.PathSubsegment);
		}))	{
		throw new System.InvalidOperationException('provided subsegments is not a list of System.Web.Routing.PathSubsegment');
	}
	
	this.subsegments = subsegments;
};

System.Web.Routing.ContentPathSegment.inherit(System.Web.Routing.PathSegment);

System.Web.Routing.ContentPathSegment.prototype.isCatchAll = function() {
	return this.subsegments.any(function(x) {
		return (x instanceof System.Web.Routing.ParameterSubsegment && x.isCatchAll === true);
	});
}

module.exports = System;