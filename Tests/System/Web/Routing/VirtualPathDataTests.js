require('../../../../System/Core.js');
var assert = require("assert-extras");
var System = require('../../../../System');
	System.extend(require('../../../../System/Web'));
	System.extend(require('../../../../System/Web/Routing'));

var testCase = require('nodeunit').testCase;

module.exports = testCase({      
	can_create_VirtualPathData_with_null_param: function (test) {		
		var route = new System.Web.Routing.Route('/url');		
		var vData = new System.Web.Routing.VirtualPathData(route, null);				
		assert.ok(vData.route instanceof System.Web.Routing.Route);
		assert.ok(vData.dataTokens instanceof System.Web.Routing.RouteValueDictionary);		
		assert.ok(vData.virtualPath === '');		
        test.done();
    },
	
	should_throw_exception_when_create_VirtualPathData_with_an_invalid_route_object: function (test) {		
		assert.throws(
			function() {
				var vData = new System.Web.Routing.VirtualPathData({}, null);	
			}, 
			System.InvalidOperationException,
			'Should throw InvalidOperationException when providing invalid route object'
		);		
        test.done();
    },
	
	should_throw_exception_when_create_RouteData_with_an_invalid_virtualPath_string: function (test) {		
		assert.throws(
			function() {
				var vData = new System.Web.Routing.VirtualPathData(null, {});	
			}, 
			System.InvalidOperationException,
			'Should throw InvalidOperationException when providing invalid virtual path string'
		);		
        test.done();
    }
});