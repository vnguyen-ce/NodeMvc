require('../../../../System/Core.js');
var assert = require("assert-extras");
var System = require('../../../../System');
	System.extend(require('../../../../System/Web'));
	System.extend(require('../../../../System/Web/Routing'));

var testCase = require('nodeunit').testCase;

module.exports = testCase({      
	routeCollection_should_inherit_from_Array: function (test) {		
		var routeCollection = new System.Web.Routing.RouteCollection();				
		assert.ok(routeCollection instanceof Array);		
        test.done();
    },
	
	AddByName_should_throw_exception_if_provide_null_parameters: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		assert.throws(
			function() {
				routeCollection.AddByName(null, new System.Web.Routing.Route('{controller}/{action}/{id}'));
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameters'
		);
		
		assert.throws(
			function() {
				routeCollection.AddByName('', new System.Web.Routing.Route('{controller}/{action}/{id}'));
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameters'
		);
		
		assert.throws(
			function() {
				routeCollection.AddByName('Default Url', null);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameters'
		);
		
		assert.throws(
			function() {
				routeCollection.AddByName('Default Url', {});
			}, 
			System.InvalidOperationException,
			'Should throw InvalidOperationException when providing an object which is not RouteBase'
		);
		
		assert.throws(
			function() {
				routeCollection.AddByName('Default Url', {Url : '{controller}/{action}/{id}'});
			}, 
			System.InvalidOperationException,
			'Should throw InvalidOperationException when providing an object which is not RouteBase'
		);
		
		assert.throws(
			function() {
				routeCollection.AddByName('Default Url', {Defaults: {}});
			}, 
			System.InvalidOperationException,
			'Should throw InvalidOperationException when providing an object which is not RouteBase'
		);
		
		test.done();
	},
	
	AddByName_should_not_throw_exception_if_provide_an_object_that_has_Url_and_Defaults_as_a_RouteBase: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.AddByName('Default Url', {Url: '{controller}/{action}/{id}', Defaults: {}});
		assert.equal(1, routeCollection.length);
		test.done();
	},
	
	Add_should_throw_exception_if_provide_null_parameter: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		assert.throws(
			function() {
				routeCollection.Add(null);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameters'
		);	
		
		test.done();
	},
	
	Add_should_not_throw_exception_if_provide_valid_parameter: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.Add({Url: '{controller}/{action}/{id}', Defaults: {}});
		assert.equal(1, routeCollection.length);
		test.done();
	},
	
	ClearItems_should_remove_all_items_in_the_collection: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.Add({Url: '{controller}/{action}/{id}', Defaults: {}});
		assert.equal(1, routeCollection.length);
		routeCollection.ClearItems();
		assert.equal(0, routeCollection.length);
		test.done();
	},
	
	Ignore_should_add_a_route_with_StopRouteHandler_to_the_collection: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.Ignore('{controller}/{action}/{id}');
		assert.equal(1, routeCollection.length);		
		assert.ok(routeCollection[0].RouteHandler instanceof System.Web.Routing.StopRoutingHandler);
		test.done();
	},
	
	InsertItem_should_insert_item_to_correct_index: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.Add({Url: '{controller}/{action}/{id}', Defaults: {}});
		routeCollection.InsertItem(0, {Url: '{controller}/{action}/{id}', Defaults: {}});
		assert.equal(2, routeCollection.length);
		test.done();
	},
	
	RemoveItem_should_remove_item_from_correct_index: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.Add({Url: '{controller}/{action}/{id}', Defaults: {}});
		routeCollection.InsertItem(0, {Url: '{*catchAll}', Defaults: {}});		
		routeCollection.RemoveItem(1);		
		assert.equal(1, routeCollection.length);
		assert.equal('{*catchAll}', routeCollection[0].Url);
		test.done();
	},
	
	SetItem_should_replace_item_at_correct_index: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.Add({Url: '{controller}/{action}/{id}', Defaults: {}});
		routeCollection.InsertItem(0, {Url: '{*catchAll}', Defaults: {}});		
		routeCollection.SetItem(1, {Url: '{*catchAllUrl}', Defaults: {}});		
		assert.equal(2, routeCollection.length);
		assert.equal('{*catchAllUrl}', routeCollection[1].Url);
		test.done();
	}
});
