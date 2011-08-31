// Import 1 type of same namespace and add more class to that namespace
var System = require('./RouteValueDictionary.js');

System.Web.Routing.BoundUrl = function(){
	this.url = '';
	this.values = new System.Web.Routing.RouteValueDictionary();
}

module.exports = System;