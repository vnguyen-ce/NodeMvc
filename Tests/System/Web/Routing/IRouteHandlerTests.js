var assert = require("assert-extras");
var System = require('../../../../System/Web/Routing');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    should_throw_exception_if_try_to_initialize_an_instance_of_IRouteHandler: function (test) {		       		
		assert.isFunction(System.Web.Routing.IRouteHandler)
		test.throws(
			function() {
				new System.Web.Routing.IRouteHandler();
			}, 
			Error,
			'Should throw exception when user try to initialise an Interface'
		);		
        test.done();
    }	
});