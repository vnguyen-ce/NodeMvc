var System = require('../../System');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    setUp: function (callback) {        		
        callback();
    },
    
	tearDown: function (callback) {        
        callback();
    },
	
	can_get_type: function (test) {
		var msg = 'ArgName';
		var exception = new System.ArgumentException(msg);        
		var type = exception.getType();
		var baseType = new System.Exception().getType();
		
		test.equal('ArgumentException', type.name);
		test.equal('System.ArgumentException', type.namespace);		
		test.equal(baseType.namespace, type.baseType.namespace);		
		test.equal(baseType.name, type.baseType.name);		
        test.done();
    }
});