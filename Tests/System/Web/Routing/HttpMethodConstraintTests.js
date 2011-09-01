require('../../../../System/Core.js');
var assert = require("assert-extras");
var System = require('../../../../System');
	System.extend(require('../../../../System/Web'));
	System.extend(require('../../../../System/Web/Routing'));

var testCase = require('nodeunit').testCase;

module.exports = testCase({      
	can_create_HttpMethodConstraint: function (test) {
		var constraint = new System.Web.Routing.HttpMethodConstraint(['POST']);
        test.done();
    },
	
	should_throw_exception_if_create_HttpMethodConstraint_with_null_param: function(test) {
		assert.throws(
			function() {
				var constraint = new System.Web.Routing.HttpMethodConstraint(null);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameters'
		);
		test.done();
	},
	
	should_throw_exception_if_create_HttpMethodConstraint_with_not_an_array_param: function(test) {
		assert.throws(
			function() {
				var constraint = new System.Web.Routing.HttpMethodConstraint({});
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameters'
		);
		test.done();
	},
	
	match_should_throw_exception_if_provide_invalid_parameter: function(test) {
		var httpContext = new System.Web.HttpContext();
		var route = new System.Web.Routing.Route();
		var routeValueDictionary = new System.Web.Routing.RouteValueDictionary();
		var parameterName = 'paramName';
		var constraint = new System.Web.Routing.HttpMethodConstraint(['POST']);
		
		assert.throws(
			function() {
				constraint.match(null, route, parameterName, routeValueDictionary, System.Web.Routing.RouteDirection.incomingRequest);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null httpContext'
		);
		assert.throws(
			function() {
				constraint.match({}, route, parameterName, routeValueDictionary, System.Web.Routing.RouteDirection.incomingRequest);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null httpContext'
		);
		
		assert.throws(
			function() {
				constraint.match(httpContext, null, parameterName, routeValueDictionary, System.Web.Routing.RouteDirection.incomingRequest);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null route'
		);
		assert.throws(
			function() {
				constraint.match(httpContext, {}, parameterName, routeValueDictionary, System.Web.Routing.RouteDirection.incomingRequest);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null route'
		);
		
		assert.throws(
			function() {
				constraint.match(httpContext, route, null, routeValueDictionary, System.Web.Routing.RouteDirection.incomingRequest);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null route'
		);
		assert.throws(
			function() {
				constraint.match(httpContext, route, {}, routeValueDictionary, System.Web.Routing.RouteDirection.incomingRequest);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null route'
		);
		
		assert.throws(
			function() {
				constraint.match(httpContext, route, parameterName, null, System.Web.Routing.RouteDirection.incomingRequest);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null route'
		);
		assert.throws(
			function() {
				constraint.match(httpContext, route, parameterName, {}, System.Web.Routing.RouteDirection.incomingRequest);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null route'
		);		
		test.done();
	},
	
	match_for_incoming_request_should_return_true_if_one_of_the_allow_methods_equal_the_request_http_method: function(test){
		var httpContext = new System.Web.HttpContext({httpMethod: 'Post'}, null);		
		var route = new System.Web.Routing.Route();
		var routeValueDictionary = new System.Web.Routing.RouteValueDictionary();
		var parameterName = 'paramName';
		var constraint = new System.Web.Routing.HttpMethodConstraint(['POST']);
		var result = constraint.match(httpContext, route, parameterName, routeValueDictionary, System.Web.Routing.RouteDirection.incomingRequest);
		assert.ok(result);
		test.done();
	},
	
	match_for_incoming_request_should_return_false_if_one_of_the_allow_methods_equal_the_request_http_method: function(test){
		var httpContext = new System.Web.HttpContext({httpMethod: 'Get'}, null);		
		var route = new System.Web.Routing.Route();
		var routeValueDictionary = new System.Web.Routing.RouteValueDictionary();
		var parameterName = 'paramName';
		var constraint = new System.Web.Routing.HttpMethodConstraint(['POST', 'DELETE']);
		var result = constraint.match(httpContext, route, parameterName, routeValueDictionary, System.Web.Routing.RouteDirection.incomingRequest);
		assert.ok(!result);
		test.done();
	},
	
	match_when_generate_url_should_throw_exception_if_param_value_is_not_string: function(test){
		var httpContext = new System.Web.HttpContext();		
		var route = new System.Web.Routing.Route();		
		var parameterName = 'paramName';
		var routeValueDictionary = new System.Web.Routing.RouteValueDictionary();
		routeValueDictionary.add(parameterName, {});
		var constraint = new System.Web.Routing.HttpMethodConstraint(['GET', 'PUT']);		
		assert.throws(
			function() {
				var result = constraint.match(httpContext, route, parameterName, routeValueDictionary, System.Web.Routing.RouteDirection.urlGeneration);
			}, 
			System.InvalidOperationException,
			'Should throw ArgumentNullException when providing a none string object as parameterValue'
		);		
		
		test.done();
	},
	
	match_when_generate_url_should_return_true_if_paramkey_not_in_the_routeValueDictionary: function(test){
		var httpContext = new System.Web.HttpContext();		
		var route = new System.Web.Routing.Route();		
		var parameterName = 'paramName';
		var routeValueDictionary = new System.Web.Routing.RouteValueDictionary();		
		var constraint = new System.Web.Routing.HttpMethodConstraint(['GET', 'PUT']);				
		var result = constraint.match(httpContext, route, parameterName, routeValueDictionary, System.Web.Routing.RouteDirection.urlGeneration);	
		assert.ok(result);
		test.done();
	},
	
	match_when_generate_url_should_return_true_if_paramvalue_found_and_match_the_httpMethod: function(test){
		var httpContext = new System.Web.HttpContext();		
		var route = new System.Web.Routing.Route();		
		var parameterName = 'paramName';
		var routeValueDictionary = new System.Web.Routing.RouteValueDictionary();		
		routeValueDictionary.add(parameterName, 'Get');
		var constraint = new System.Web.Routing.HttpMethodConstraint(['GET', 'PUT']);				
		var result = constraint.match(httpContext, route, parameterName, routeValueDictionary, System.Web.Routing.RouteDirection.urlGeneration);	
		assert.ok(result);
		test.done();
	},
	
	match_when_generate_url_should_return_false_if_paramvalue_found_but_not_match_any_httpMethod: function(test){
		var httpContext = new System.Web.HttpContext();		
		var route = new System.Web.Routing.Route();		
		var parameterName = 'paramName';
		var routeValueDictionary = new System.Web.Routing.RouteValueDictionary();		
		routeValueDictionary.add(parameterName, 'POST');
		var constraint = new System.Web.Routing.HttpMethodConstraint(['GET', 'PUT']);				
		var result = constraint.match(httpContext, route, parameterName, routeValueDictionary, System.Web.Routing.RouteDirection.urlGeneration);	
		assert.ok(!result);
		test.done();
	},
	
	match_should_return_true_if_routeDirection_does_not_match_the_defined_enum: function(test){
		var httpContext = new System.Web.HttpContext();		
		var route = new System.Web.Routing.Route();		
		var parameterName = 'paramName';
		var routeValueDictionary = new System.Web.Routing.RouteValueDictionary();				
		var constraint = new System.Web.Routing.HttpMethodConstraint(['GET', 'PUT']);				
		var result = constraint.match(httpContext, route, parameterName, routeValueDictionary, 1000);	
		assert.ok(result);
		test.done();
	}
	
	
});