var System = require('../../System');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    setUp: function (callback) {        		
        callback();
    },
    
	tearDown: function (callback) {        
        callback();
    },
	
	can_initialise_a_NotImplementedException_with_message: function (test) {		
		var exception = new System.NotImplementedException();        
		test.ok(exception instanceof System.Exception);		
		test.ok(exception.stackTrace != '');
        test.done();
    },
	
	can_get_type: function (test) {		
		var exception = new System.NotImplementedException();        
		var type = exception.getType();
		var baseType = new System.Exception().getType();
		
		test.equal('NotImplementedException', type.name);
		test.equal('System.NotImplementedException', type.namespace);		
		test.equal(baseType.namespace, type.baseType.namespace);		
		test.equal(baseType.name, type.baseType.name);		
        test.done();
    }
});