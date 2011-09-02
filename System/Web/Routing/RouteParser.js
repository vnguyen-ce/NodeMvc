require('../../String.js');
var Core = require('../../Core.js');

// Import 1 type of same namespace and add more class to that namespace
var System = require('./RouteBase.js');	
	
System.Web.Routing.RouteParser = {
	_getLiteral: function(/*string*/ segmentLiteral){
		var str = segmentLiteral.replace(/{{/g, '').replace(/}}/g, '');		
		if (!str.contains("{") && !str.contains("}"))
		{
			return segmentLiteral.replace(/{{/g, '{').replace(/}}/g, '}');
		}
		return null;
	},
	
	_indexOfFirstOpenParameter: function(/*string*/ segment, /*int*/ startIndex){
		while (true) {
			startIndex = segment.indexOf('{', startIndex);
			if (startIndex === -1) {
				return -1;
			}
			if (((startIndex + 1) === segment.length) || (((startIndex + 1) < segment.length) && (segment[startIndex + 1] !== '{'))) {
				return startIndex;
			}
			startIndex += 2;
		}
	},
	
	_isSeparator: function(/*string*/ s){
		return s == '/';
	}
	
};	

module.exports = System;