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
		var exception = new System.NotSupportedException(message);        
		test.ok(exception instanceof System.Exception);
		test.equal(exception.message, message);
		test.ok(exception.stackTrace != '');
        test.done();
    },
	
	can_get_type: function (test) {		
		var message = 'Not supported';
		var exception = new System.NotSupportedException(message);        
		var type = exception.getType();
		var baseType = new System.Exception().getType();
		
		test.equal('NotSupportedException', type.name);
		test.equal('System.NotSupportedException', type.namespace);		
		test.equal(baseType.namespace, type.baseType.namespace);		
		test.equal(baseType.name, type.baseType.name);		
        test.done();
    }
});