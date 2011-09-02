var System = require('../../System');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    setUp: function (callback) {        		
        callback();
    },
    
	tearDown: function (callback) {        
        callback();
    },
	
	can_initialise_an_ArgumentNullException_with_argument_name: function (test) {
		var argName = 'ArgName';
		var exception = new System.ArgumentNullException(argName);        
		test.ok(exception instanceof System.Exception);
		test.ok(exception instanceof System.ArgumentException);		
		test.equal(exception.message, argName + ' can not be null');
		test.ok(exception.stackTrace != '');
        test.done();
    }
});