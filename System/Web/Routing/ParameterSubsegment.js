require('../../Linq/Enumerable.js');
var Core = require('../../Core.js');
var System = require('./PathSubsegment.js');	

System.Web.Routing.ParameterSubsegment = function(parameterName){		
	if (parameterName[0] == '*') {
		this.parameterName = parameterName.substr(1, parameterName.length - 1);
		this.isCatchAll = true;
	}
	else {
		this.parameterName = parameterName;
	}
};

System.Web.Routing.ParameterSubsegment.inherit(System.Web.Routing.PathSubsegment);

module.exports = System;