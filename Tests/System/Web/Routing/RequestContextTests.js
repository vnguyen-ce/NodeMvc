require('../../../../System/Core.js');
var assert = require("assert-extras");
var System = require('../../../../System');
	System.extend(require('../../../../System/Web'));
	System.extend(require('../../../../System/Web/Routing'));

var testCase = require('nodeunit').testCase;

module.exports = testCase({   
    should_throw_exception_if_initialize_RequestContext_by_null_httpRequest: function (test) {		
		test.throws(
			function() {
				new System.Web.Routing.RequestContext(null, new System.Web.Routing.RouteData());
			}, 
			System.ArgumentNullException,
			'Should throw exception provide null HttpRequest'
		);		
        test.done();
    },

	should_throw_exception_if_initialize_RequestContext_by_not_a_httpRequest: function (test) {		
		test.throws(
			function() {
				new System.Web.Routing.RequestContext({}, new System.Web.Routing.RouteData());
			}, 
			System.ArgumentNullException,
			'Should throw exception provide an object not HttpRequest'
		);		
        test.done();
    },		
	
	should_throw_exception_if_initialize_RequestContext_by_null_RouteData: function (test) {		
		test.throws(
			function() {
				new System.Web.Routing.RequestContext(new System.Web.HttpContext(), null);
			}, 
			System.ArgumentNullException,
			'Should throw exception provide null RouteData'
		);		
        test.done();
    },
	
	should_throw_exception_if_initialize_RequestContext_by_not_a_RouteData: function (test) {						
		test.throws(
			function() {
				new System.Web.Routing.RequestContext(new System.Web.HttpContext(), {});
			}, 
			System.ArgumentNullException,
			'Should throw exception provide an object not RouteData'
		);		
        test.done();
    },
	
	can_initialize_RequestContext_by_providing_HttpContext_and_RouteData: function (test) {						
		var requestContext = new System.Web.Routing.RequestContext(new System.Web.HttpContext(), new System.Web.Routing.RouteData());		
		test.ok(requestContext.httpContext instanceof System.Web.HttpContext);
		test.ok(requestContext.routeData instanceof System.Web.Routing.RouteData);		
        test.done();
    }
});