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
	
	Add_should_add_the_value_by_the_provided_key: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.Add('action', 'ActionName');
		assert.equal('ActionName', dic.action);
		assert.equal('ActionName', dic['action']);
		test.done();
	},
	
	AddValues_should_throw_exception_if_provide_null_parameter: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		assert.throws(
			function() {
				dic.AddValues(null);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameter'
		);
		
		assert.throws(
			function() {
				dic.AddValues(System.Web.Routing.RouteValueDictionary);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameter'
		);
		test.done();
	},
	
	AddValues_should_merge_content: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.Add('action', 'ActionName');
		dic.AddValues({controller: 'ControllerName', action: 'NewActionName'});
		assert.equal('NewActionName', dic.action);
		assert.equal('NewActionName', dic['action']);
		test.done();
	},
	
	Clear_should_remove_everything: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.Add('action', 'ActionName');
		dic.AddValues({controller: 'ControllerName', action: 'NewActionName'});
		dic.Clear();
		assert.ok(dic.action == undefined);
		assert.ok(dic['action'] == undefined);
		assert.ok(dic.controller == undefined);
		assert.ok(dic['controller'] == undefined);
		test.done();
	},
	
	ContainsKey_should_return_true_if_object_contains_the_key: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.Add('action', 'ActionName');
		dic.AddValues({controller: 'ControllerName', action: 'NewActionName'});
		assert.ok(dic.ContainsKey('controller'));
		assert.ok(dic.ContainsKey('action'));
		assert.ok(!dic.ContainsKey('id'));
		test.done();		
	},
	
	ContainsValue_should_return_true_if_object_contains_the_value: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.Add('action', 'ActionName');
		dic.AddValues({controller: 'ControllerName', action: 'NewActionName'});
		assert.ok(dic.ContainsValue('ControllerName'));
		assert.ok(dic.ContainsValue('NewActionName'));
		assert.ok(!dic.ContainsValue('id'));
		test.done();		
	},
	
	Remove_should_remove_the_item_by_key: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.Add('action', 'ActionName');
		dic.AddValues({controller: 'ControllerName', action: 'NewActionName'});
		dic.Remove('action');
		assert.ok(dic.ContainsValue('ControllerName'));
		assert.ok(!dic.ContainsValue('NewActionName'));
		assert.ok(!dic.ContainsValue('id'));
		test.done();		
	},
	
	Count_should_return_count_of_the_items: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.Add('action', 'ActionName');
		dic.AddValues({controller: 'ControllerName', action: 'NewActionName'});
		assert.equal(2, dic.Count());
		test.done();		
	},
	
	Keys_should_return_all_of_keys: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.Add('action', 'ActionName');
		dic.AddValues({controller: 'ControllerName', action: 'NewActionName'});
		assert.equal(2, dic.Keys().length);
		assert.equal('controller', dic.Keys()[0]);
		assert.equal('action', dic.Keys()[1]);
		test.done();		
	},
	
	Values_should_return_all_of_keys: function(test) {
		var dic = new System.Web.Routing.RouteValueDictionary({controller: 'ControllerName'});
		dic.Add('action', 'ActionName');
		dic.AddValues({controller: 'ControllerName', action: 'NewActionName'});
		assert.equal(2, dic.Values().length);
		assert.equal('ControllerName', dic.Values()[0]);
		assert.equal('NewActionName', dic.Values()[1]);
		test.done();		
	}
});