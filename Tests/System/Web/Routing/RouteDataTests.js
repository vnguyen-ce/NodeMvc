require('../../../../System/Core.js');
var assert = require("assert-extras");
var System = require('../../../../System');
	System.extend(require('../../../../System/Web'));
	System.extend(require('../../../../System/Web/Routing'));

var testCase = require('nodeunit').testCase;

module.exports = testCase({      
	can_create_RouteData_with_null_param: function (test) {		
		var route = new System.Web.Routing.Route();		
		var routeData = new System.Web.Routing.RouteData();
		assert.ok(routeData.Values instanceof System.Web.Routing.RouteValueDictionary);
		assert.ok(routeData.DataTokens instanceof System.Web.Routing.RouteValueDictionary);		
        test.done();
    },
	
	should_throw_exception_when_create_RouteData_with_an_invalid_route_object: function (test) {		
		assert.throws(
			function() {
				var routeData = new System.Web.Routing.RouteData({}, null);	
			}, 
			System.InvalidOperationException,
			'Should throw InvalidOperationException when providing invalid route object'
		);		
        test.done();
    },
	
	should_throw_exception_when_create_RouteData_with_an_invalid_IRouteHandler_object: function (test) {		
		assert.throws(
			function() {
				var routeData = new System.Web.Routing.RouteData(null, {});	
			}, 
			System.InvalidOperationException,
			'Should throw InvalidOperationException when providing invalid route handler'
		);		
        test.done();
    },
	
	
});