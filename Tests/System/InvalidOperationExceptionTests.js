var System = require('../../System');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    setUp: function (callback) {        		
        callback();
    },
    
	tearDown: function (callback) {        
        callback();
    },
	
	can_initialise_an_InvalidOperationException_with_a_message: function (test) {
		var message = 'An error message';
		var exception = new System.InvalidOperationException(message);        
		test.ok(exception instanceof System.Exception);
		test.equal(exception.message, message);
		test.ok(exception.stackTrace != '');
        test.done();
    }
});