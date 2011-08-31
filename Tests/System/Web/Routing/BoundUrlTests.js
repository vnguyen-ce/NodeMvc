require('../../../../System/Core.js');
var assert = require("assert-extras");
var System = require('../../../../System/Web/Routing/BoundUrl.js')
	System.extend(require('../../../../System/Web/Routing/RouteValueDictionary.js'));

var testCase = require('nodeunit').testCase;

module.exports = testCase({      
	when_create_BoundUrl_should_return_object_with_url_and_not_null_routeVal: function (test) {		
		var boundUrl = new System.Web.Routing.BoundUrl();		
		
		assert.ok(boundUrl.url == '');
		assert.ok(boundUrl.values instanceof System.Web.Routing.RouteValueDictionary);		
        test.done();
    }	
});