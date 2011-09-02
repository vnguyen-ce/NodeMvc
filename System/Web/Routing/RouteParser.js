require('../../String.js');
var Core = require('../../Core.js');

// Import 1 type of same namespace and add more class to that namespace
var System = require('./RouteBase.js');	
	System.extend(require('./PathSubsegment.js'));
	System.extend(require('./LiteralSubsegment.js'));	
	System.extend(require('./ParameterSubsegment.js'));
	System.extend(require('./SeparatorPathSegment.js'));	
	System.extend(require('./ContentPathSegment.js'));	
	
	
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
		return s === '/';
	},
	
	_isValidParameterName: function(/*string*/ parameterName){
		if (parameterName.length === 0) {
			return false;
		}
		
		for (var i = 0; i < parameterName.length; i++) {
			switch (parameterName[i])
			{
				case '/':
				case '{':
				case '}':
					return false;
			}
		}
		return true;
	},

	_parseUrlSegment: function(/*string*/ segment){
		var startIndex = 0,
			list = new Array(); // of PathSubsegment
			
		while (startIndex < segment.length) {
			var num2 = this._indexOfFirstOpenParameter(segment, startIndex);
			//console.log('DEBUG:' , num2);
			if (num2 == -1)	{
				var str = this._getLiteral(segment.substr(startIndex));
				if (str == null) {
					throw new System.ArgumentException('Route mismatched parameter: segment' , 'routeUrl');				
				}
				if (str.length > 0) {
					list.push(new System.Web.Routing.LiteralSubsegment(str));
				}
				break;
			}
			var index = segment.indexOf('}', num2 + 1);
			if (index === -1) {
				throw new System.ArgumentException('Route mismatched parameter: segment' , 'routeUrl');								
			}
			var literal = this._getLiteral(segment.substr(startIndex, num2 - startIndex));
			if (literal == null) {
				throw new System.ArgumentException('Route mismatched parameter: segment' , 'routeUrl');												
			}
			if (literal.length > 0)	{
				list.push(new System.Web.Routing.LiteralSubsegment(literal));				
			}
			var parameterName = segment.substr(num2 + 1, (index - num2) - 1);
			list.push(new System.Web.Routing.ParameterSubsegment(parameterName));					
			startIndex = index + 1;
		}		
		return list;
	},
	
	_splitUrlToPathSegments: /*IList<PathSegment>*/ function(/*List of string*/ urlParts) {		
		var list = new Array(); // IList<PathSegment>		
		for(var i = 0 ; i < urlParts.length; i++) {
			var str = urlParts[i];			
			if (this._isSeparator(str)) {			
				list.push(new System.Web.Routing.SeparatorPathSegment());				
			}
			else {			
				try	{
					//console.log(' * DEBUG: ', str);
					var subsegments = this._parseUrlSegment(str);
					//console.log(' * DEBUG: ', subsegments);
					list.push(new System.Web.Routing.ContentPathSegment(subsegments));
				}
				catch(e) {
					console.log(e);
					throw e;
				}
				
			}				
		}
		return list;
	}
};	

module.exports = System;