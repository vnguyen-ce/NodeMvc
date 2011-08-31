require('../../Core.js');
var System = require('../../ArgumentNullException.js');;
	System.Web = System.Web || {};
	System.Web.Routing = System.Web.Routing || {};

	
function _copyObjects(source, des){
	if (source == null){
		return;
	}
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

System.Web.Routing.RouteValueDictionary.prototype.add = function(key, value) {
	this[key] = value;
};

System.Web.Routing.RouteValueDictionary.prototype.addValues = function(values) {
	if (values == null || typeof values !== 'object') {
		throw new System.ArgumentNullException('values');
	}
	_copyObjects(values, this);
};

System.Web.Routing.RouteValueDictionary.prototype.clear = function() {
	for (key in this) {
		delete this[key];
	}
};
 
System.Web.Routing.RouteValueDictionary.prototype.containsKey = function(key) {
	return (typeof this[key] != 'undefined');
};

System.Web.Routing.RouteValueDictionary.prototype.containsValue = function(value) {
	for (key in this) {
		if (this[key] === value) return true;
	}
	return false;
};

System.Web.Routing.RouteValueDictionary.prototype.remove = function(key) {
	delete this[key];
};


System.Web.Routing.RouteValueDictionary.prototype.count = function() {
	var count = 0;
	for (key in this) {
		if (typeof this[key] != 'function') count++;
	}
	return count;
};

System.Web.Routing.RouteValueDictionary.prototype.keys = function() {
	var allKeys = new Array();
	for (key in this) {
		if (typeof this[key] != 'function') allKeys.push(key);
	}
	return allKeys;
};

System.Web.Routing.RouteValueDictionary.prototype.values = function() {
	var vals = new Array();
	for (key in this) {
		if (typeof this[key] != 'function') vals.push(this[key]);
	}
	return vals;
};

module.exports = System;