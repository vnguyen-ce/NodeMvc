require('../../../../System/Core.js');
var assert = require("assert-extras");
var System = require('../../../../System');
	System.extend(require('../../../../System/Web'));
	System.extend(require('../../../../System/Web/Routing'));

var testCase = require('nodeunit').testCase;

module.exports = testCase({      
	can_create_Route_with_url: function (test) {
		var url = '{controller}/{action}/{id}';
		var route = new System.Web.Routing.Route(url);		
		
		assert.ok(route instanceof System.Web.Routing.RouteBase);		
		assert.equal(route.url, url);
		assert.isNotNull(route.constraints);
		assert.isNotNull(route.dataTokens);
		assert.isNotNull(route.defaults);
		assert.isNull(route.routeHandler);
		assert.isFunction(route.getRouteData);
		
        test.done();
    },
});