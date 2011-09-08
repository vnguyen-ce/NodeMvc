var string = require('../../String.js');
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
	},
	
	_splitUrlToPathSegmentStrings:/*IList<string>*/ function(/*string*/url){
		var list = new Array();
		if (!string.isNullOrEmpty(url)){
			var index = 0;
			for(var i = 0; i < url.length; i = index + 1) {
				index = url.indexOf('/', i);
				if (index == -1){
					var str = url.substr(i);
					if (str.length > 0){
						list.push(str);
					}
					return list;
				}
				var item = url.substr(i, index - i);
				if (item.length > 0){
					list.push(item);
				}
				list.push('/');
			}
		}
		return list;
	},
	
	_validateUrlParts: function(/*List of string*/ pathSegments) {		
		var usedParameterNames = new Array();
		var nullable = null;
		var flag = false;
		for(var i = 0; i < pathSegments.length; i++){
			var str = pathSegments[i];
			var flag2 = false;
			if (flag){
				throw new System.ArgumentException("Route catch all must be last");
			}
			
			if (nullable == null){
				nullable = this._isSeparator(str);
				flag2 = nullable;
			}
			else {
				flag2 = this._isSeparator(str);
				if (flag2 === true && nullable === true){
					throw new System.ArgumentException("Route cannot have consecutive separators");
				}				
				nullable = flag2;
			}
			
			if (flag2 === false){
				var pathSubsegments = this._parseUrlSegment(str);
				this._validateUrlSegment(pathSubsegments, usedParameterNames, str);
				flag = pathSubsegments.any(function(x){
					return x instanceof System.Web.Routing.ParameterSubsegment && x.IsCatchAll == true;
				});
			}			
		}
		return null;
	},
	
	// Implement the last function then write unit tests for both
	_validateUrlSegment: function(/*IList<PathSubsegment>*/ pathSubsegments, /*HashSet<string>*/ usedParameterNames, /*string*/ pathSegment)	{
		// bool flag = false;
		// Type type = null;
		// foreach (PathSubsegment subsegment in pathSubsegments)
		// {
			// if ((type != null) && (type == subsegment.GetType()))
			// {
				// return new ArgumentException(string.Format(CultureInfo.CurrentUICulture, System.Web.SR.GetString("Route_CannotHaveConsecutiveParameters"), new object[0]), "routeUrl");
			// }
			// type = subsegment.GetType();
			// if (!(subsegment is LiteralSubsegment))
			// {
				// ParameterSubsegment subsegment3 = subsegment as ParameterSubsegment;
				// if (subsegment3 != null)
				// {
					// string parameterName = subsegment3.ParameterName;
					// if (subsegment3.IsCatchAll)
					// {
						// flag = true;
					// }
					// if (!IsValidParameterName(parameterName))
					// {
						// return new ArgumentException(string.Format(CultureInfo.CurrentUICulture, System.Web.SR.GetString("Route_InvalidParameterName"), new object[] { parameterName }), "routeUrl");
					// }
					// if (usedParameterNames.Contains(parameterName))
					// {
						// return new ArgumentException(string.Format(CultureInfo.CurrentUICulture, System.Web.SR.GetString("Route_RepeatedParameter"), new object[] { parameterName }), "routeUrl");
					// }
					// usedParameterNames.Add(parameterName);
				// }
			// }
		// }
		// if (flag && (pathSubsegments.Count != 1))
		// {
			// return new ArgumentException(string.Format(CultureInfo.CurrentUICulture, System.Web.SR.GetString("Route_CannotHaveCatchAllInMultiSegment"), new object[0]), "routeUrl");
		// }
		// return null;
	}
};	

module.exports = System;