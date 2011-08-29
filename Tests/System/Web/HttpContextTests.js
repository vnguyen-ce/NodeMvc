var System = require('../../../System/Web');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    setUp: function (callback) {        		
        callback();
    },
    
	tearDown: function (callback) {        
        callback();
    },
	
    can_initialise_a_HttpContext: function (test) {
		var exception = new System.Web.HttpContext();
        test.ok(exception != null);
		test.ok(exception instanceof System.Web.HttpContext);
        test.done();
    },
	
	when_initialise_a_HttpContext_with_request_and_response_those_value_should_have_value: function (test) {
		var exception = new System.Web.HttpContext({}, {});
        test.ok(exception.HttpResponse != null);
		test.ok(exception.HttpRequest != null);		
        test.done();
    }
});