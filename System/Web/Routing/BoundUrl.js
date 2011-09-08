// Import 1 type of same namespace and add more class to that namespace
var System = require('./RouteValueDictionary.js');

function BoundUrl(){
	this.url = '';
	this.values = new System.Web.Routing.RouteValueDictionary();
};

System.Web.Routing.BoundUrl = BoundUrl;

module.exports = System;