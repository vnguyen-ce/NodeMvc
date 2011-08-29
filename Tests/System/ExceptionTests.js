var System = require('../../System');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    setUp: function (callback) {        		
        callback();
    },
    
	tearDown: function (callback) {        
        callback();
    },
	
    canInitialiseAnException: function (test) {
		var exception = new System.Exception();
        test.ok(exception != null);
		test.ok(exception instanceof System.Exception);
        test.done();
    },
	
	canInitialiseAnExceptionWithMessage: function (test) {
		var message = 'Some error message';
		var exception = new System.Exception(message);        
		test.ok(exception instanceof System.Exception);
		test.equal(exception.Message, message);
		test.ok(exception.StackTrace != '');
        test.done();
    }
});