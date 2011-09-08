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
		var httpContext = new System.Web.HttpContext({}, {});
        test.ok(httpContext.httpResponse != null);
		test.ok(httpContext.httpRequest != null);		
        test.done();
    },
	
	can_get_type: function (test) {		
		var httpContext = new System.Web.HttpContext({}, {});
		var type = httpContext.getType();		
		
		test.equal('HttpContext', type.name);
		test.equal('System.Web.HttpContext', type.namespace);		
        test.done();
    }
});