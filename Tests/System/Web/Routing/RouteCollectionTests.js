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
	
	addByName_should_throw_exception_if_provide_null_parameters: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		assert.throws(
			function() {
				routeCollection.addByName(null, new System.Web.Routing.Route('{controller}/{action}/{id}'));
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameters'
		);
		
		assert.throws(
			function() {
				routeCollection.addByName('', new System.Web.Routing.Route('{controller}/{action}/{id}'));
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameters'
		);
		
		assert.throws(
			function() {
				routeCollection.addByName('Default Url', null);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameters'
		);
		
		assert.throws(
			function() {
				routeCollection.addByName('Default Url', {});
			}, 
			System.InvalidOperationException,
			'Should throw InvalidOperationException when providing an object which is not RouteBase'
		);
		
		assert.throws(
			function() {
				routeCollection.addByName('Default Url', {url : '{controller}/{action}/{id}'});
			}, 
			System.InvalidOperationException,
			'Should throw InvalidOperationException when providing an object which is not RouteBase'
		);
		
		assert.throws(
			function() {
				routeCollection.addByName('Default Url', {defaults: {}});
			}, 
			System.InvalidOperationException,
			'Should throw InvalidOperationException when providing an object which is not RouteBase'
		);
		
		test.done();
	},
	
	addByName_should_not_throw_exception_if_provide_an_object_that_has_Url_and_Defaults_as_a_RouteBase: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.addByName('Default Url', {url: '{controller}/{action}/{id}', defaults: {}});
		assert.equal(1, routeCollection.length);
		test.done();
	},
	
	add_should_throw_exception_if_provide_null_parameter: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		assert.throws(
			function() {
				routeCollection.add(null);
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameters'
		);	
		
		test.done();
	},
	
	add_should_not_throw_exception_if_provide_valid_parameter: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.add({url: '{controller}/{action}/{id}', defaults: {}});
		assert.equal(1, routeCollection.length);
		test.done();
	},
	
	clearItems_should_remove_all_items_in_the_collection: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.add({url: '{controller}/{action}/{id}', defaults: {}});
		assert.equal(1, routeCollection.length);
		routeCollection.clearItems();
		assert.equal(0, routeCollection.length);
		test.done();
	},
	
	ignore_should_add_a_route_with_StopRouteHandler_to_the_collection: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.ignore('{controller}/{action}/{id}');
		assert.equal(1, routeCollection.length);		
		assert.ok(routeCollection[0].routeHandler instanceof System.Web.Routing.StopRoutingHandler);
		test.done();
	},
	
	insertItem_should_insert_item_to_correct_index: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.add({url: '{controller}/{action}/{id}', defaults: {}});
		routeCollection.insertItem(0, {url: '{controller}/{action}/{id}', defaults: {}});
		assert.equal(2, routeCollection.length);
		test.done();
	},
	
	removeItem_should_remove_item_from_correct_index: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.add({url: '{controller}/{action}/{id}', defaults: {}});
		routeCollection.insertItem(0, {url: '{*catchAll}', defaults: {}});		
		routeCollection.removeItem(1);		
		assert.equal(1, routeCollection.length);
		assert.equal('{*catchAll}', routeCollection[0].url);
		test.done();
	},
	
	setItem_should_replace_item_at_correct_index: function(test) {
		var routeCollection = new System.Web.Routing.RouteCollection();				
		routeCollection.add({url: '{controller}/{action}/{id}', defaults: {}});
		routeCollection.insertItem(0, {url: '{*catchAll}', defaults: {}});		
		routeCollection.setItem(1, {url: '{*catchAllUrl}', defaults: {}});		
		assert.equal(2, routeCollection.length);
		assert.equal('{*catchAllUrl}', routeCollection[1].url);
		test.done();
	}
});
