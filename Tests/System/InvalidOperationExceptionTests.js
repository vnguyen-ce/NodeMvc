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
    },
	
	can_get_type: function (test) {
		var message = 'An error message';
		var exception = new System.InvalidOperationException(message);        
		var type = exception.getType();		
		var baseType = new System.Exception().getType();
		
		test.equal('InvalidOperationException', type.name);
		test.equal('System.InvalidOperationException', type.namespace);		
		test.equal(baseType.namespace, type.baseType.namespace);		
		test.equal(baseType.name, type.baseType.name);		
        test.done();
    }
});