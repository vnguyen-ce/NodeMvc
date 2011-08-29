var assert = require("assert-extras");
var System = require('../../../System/Web');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    should_throw_exception_if_try_to_initialize_an_instance_of_IHttpHandler: function (test) {		       		
		assert.isFunction(System.Web.IHttpHandler)
		test.throws(
			function() {
				new System.Web.IHttpHandler();
			}, 
			Error,
			'Should throw exception when user try to initialise an Interface'
		);
		
        test.done();
    }	
});