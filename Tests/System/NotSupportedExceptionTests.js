var System = require('../../System');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    setUp: function (callback) {        		
        callback();
    },
    
	tearDown: function (callback) {        
        callback();
    },
	
	can_initialise_a_NotSupportedException_with_message: function (test) {
		var message = 'Not supported';
		var exception = new System.InvalidOperationException(message);        
		test.ok(exception instanceof System.Exception);
		test.equal(exception.Message, message);
		test.ok(exception.StackTrace != '');
        test.done();
    }
});