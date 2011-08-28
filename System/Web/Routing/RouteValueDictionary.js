require('../../Core.js');
var System = require('../../ArgumentNullException.js');;
	System.Web = System.Web || {};
	System.Web.Routing = System.Web.Routing || {};
	
	
function _copyObjects(source, des){
	var props = Object.getOwnPropertyNames(source);
	//console.log(props);
	props.forEach(function(name) {
		if(typeof(source[name]) != 'function' && typeof (source[name]) != 'undefined' ){
			des[name] = source[name];
		}		
	});
}
	
System.Web.Routing.RouteValueDictionary = function(object){
	if (object != null) {
		_copyObjects(object, this);
	}
};

System.Web.Routing.RouteValueDictionary.prototype.Add = function(key, value) {
	this[key] = value;
};

System.Web.Routing.RouteValueDictionary.prototype.AddValues = function(values) {
	if (typeof values !== 'object') {
		throw new System.ArgumentNullException('values');
	}
	_copyObjects(values, this);
};

System.Web.Routing.RouteValueDictionary.prototype.Clear = function() {
	for (key in this) {
		delete this[key];
	}
};
 
System.Web.Routing.RouteValueDictionary.prototype.ContainsKey = function(key) {
	return (typeof this[key] != 'undefined');
};

System.Web.Routing.RouteValueDictionary.prototype.ContainsValue = function(value) {
	for (key in this) {
		if (this[key] === value) return true;
	}
	return false;
};

System.Web.Routing.RouteValueDictionary.prototype.Remove = function(key) {
	delete this[key];
};


System.Web.Routing.RouteValueDictionary.prototype.Count = function() {
	var count = 0;
	for (key in this) {
		if (typeof this[key] != 'function') count++;
	}
	return count;
};

System.Web.Routing.RouteValueDictionary.prototype.Keys = function() {
	var keys = new Array();
	for (key in this) {
		if (typeof this[key] != 'function') keys.push(key);
	}
	return keys;
};

System.Web.Routing.RouteValueDictionary.prototype.Values = function() {
	var vals = new Array();
	for (key in this) {
		if (typeof this[key] != 'function') vals.push(this[key]);
	}
	return vals;
};






module.exports = System;