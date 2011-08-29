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
		assert.equal(route.Url, url);
		assert.isNotNull(route.Constraints);
		assert.isNotNull(route.DataTokens);
		assert.isNotNull(route.Defaults);
		assert.isNull(route.RouteHandler);
		assert.isNotNull(route.GetRouteData);
		
        test.done();
    },
});