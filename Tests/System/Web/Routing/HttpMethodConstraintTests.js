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
	}
	
});