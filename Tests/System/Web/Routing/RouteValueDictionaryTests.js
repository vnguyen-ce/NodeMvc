require('../../../../System/Core.js');
var assert = require("assert-extras");
var System = require('../../../../System');
	System.extend(require('../../../../System/Web'));
	System.extend(require('../../../../System/Web/Routing'));

var testCase = require('nodeunit').testCase;

module.exports = testCase({      
	can_create_RouteValueDictionary_from_a_JSON_object: function (test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		assert.equal('ControllerName', dic.controller);
		assert.equal('ControllerName', dic['controller']);
        test.done();
    },
	
	add_should_add_the_value_by_the_provided_key: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.add('action', 'ActionName');
		assert.equal('ActionName', dic.action);
		assert.equal('ActionName', dic['action']);
		test.done();
	},
	
	addValues_should_throw_exception_if_provide_null_parameter: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		assert.throws(
			function() {
				dic.addValues(null);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameter'
		);
		
		assert.throws(
			function() {
				dic.addValues(System.Web.Routing.RouteValueDictionary);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameter'
		);
		test.done();
	},
	
	addValues_should_merge_content: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.add('action', 'ActionName');
		dic.addValues({controller: 'ControllerName', action: 'NewActionName'});
		assert.equal('NewActionName', dic.action);
		assert.equal('NewActionName', dic['action']);
		test.done();
	},
	
	clear_should_remove_everything: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.add('action', 'ActionName');
		dic.addValues({controller: 'ControllerName', action: 'NewActionName'});
		dic.clear();
		assert.ok(dic.action == undefined);
		assert.ok(dic['action'] == undefined);
		assert.ok(dic.controller == undefined);
		assert.ok(dic['controller'] == undefined);
		test.done();
	},
	
	containsKey_should_return_true_if_object_contains_the_key: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.add('action', 'ActionName');
		dic.addValues({controller: 'ControllerName', action: 'NewActionName'});
		assert.ok(dic.containsKey('controller'));
		assert.ok(dic.containsKey('action'));
		assert.ok(!dic.containsKey('id'));
		test.done();		
	},
	
	containsValue_should_return_true_if_object_contains_the_value: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.add('action', 'ActionName');
		dic.addValues({controller: 'ControllerName', action: 'NewActionName'});
		assert.ok(dic.containsValue('ControllerName'));
		assert.ok(dic.containsValue('NewActionName'));
		assert.ok(!dic.containsValue('id'));
		test.done();		
	},
	
	remove_should_remove_the_item_by_key: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.add('action', 'ActionName');
		dic.addValues({controller: 'ControllerName', action: 'NewActionName'});
		dic.remove('action');
		assert.ok(dic.containsValue('ControllerName'));
		assert.ok(!dic.containsValue('NewActionName'));
		assert.ok(!dic.containsValue('id'));
		test.done();		
	},
	
	count_should_return_count_of_the_items: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.add('action', 'ActionName');
		dic.addValues({controller: 'ControllerName', action: 'NewActionName'});
		assert.equal(2, dic.count());
		test.done();		
	},
	
	keys_should_return_all_of_keys: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.add('action', 'ActionName');
		dic.addValues({controller: 'ControllerName', action: 'NewActionName'});
		assert.equal(2, dic.keys().length);
		assert.equal('controller', dic.keys()[0]);
		assert.equal('action', dic.keys()[1]);
		test.done();		
	},
	
	values_should_return_all_of_keys: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.add('action', 'ActionName');
		dic.addValues({controller: 'ControllerName', action: 'NewActionName'});
		assert.equal(2, dic.values().length);
		assert.equal('ControllerName', dic.values()[0]);
		assert.equal('NewActionName', dic.values()[1]);
		test.done();		
	}
});