var System = require('../../System');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    setUp: function (callback) {        		
        callback();
    },
    
	tearDown: function (callback) {        
        callback();
    },
	
    can_initialise_an_exception: function (test) {
		var exception = new System.Exception();
        test.ok(exception != null);
		test.ok(exception instanceof System.Exception);
        test.done();
    },
	
	can_initialise_an_Exception_with_message: function (test) {
		var message = 'Some error message';
		var exception = new System.Exception(message);        
		test.ok(exception instanceof System.Exception);
		test.equal(exception.message, message);
		test.ok(exception.stackTrace != '');
        test.done();
    },
	
	can_get_type: function (test) {
		var message = 'Some error message';
		var exception = new System.Exception(message);        
		var type = exception.getType();
		test.equal('Exception', type.name);
		test.equal('System.Exception', type.namespace);		
		test.equal(null, type.baseType);		
        test.done();
    }
});