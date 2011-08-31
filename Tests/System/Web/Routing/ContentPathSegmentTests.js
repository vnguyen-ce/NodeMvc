require('../../../../System/Core.js');
var assert = require("assert-extras");
var System = require('../../../../System');
	System.extend(require('../../../../System/Web'));
	System.extend(require('../../../../System/Web/Routing'));
	System.extend(require('../../../../System/Web/Routing/ContentPathSegment.js')); // Because it's not included in the Index.js, ContentPathSegment is internal
	System.extend(require('../../../../System/Web/Routing/PathSubsegment.js')); // Because it's not included in the Index.js, PathSubsegment is internal

var testCase = require('nodeunit').testCase;

module.exports = testCase({      
	should_throw_exception_if_try_to_create_ContentPathSegment_with_null_param: function (test) {		
		assert.throws(
			function() {
				var segment = new System.Web.Routing.ContentPathSegment();
			}, 
			System.ArgumentNullException,
			'Should throw ArgumentNullException when providing null parameters'
		);			
        test.done();
    },
	
	should_throw_exception_if_try_to_create_ContentPathSegment_with_a_list_that_has_item_not_in_the_valid_type: function (test) {		
		assert.throws(
			function() {
				var list = new Array();
				list.push({});
				var segment = new System.Web.Routing.ContentPathSegment(list);
			}, 
			System.InvalidOperationException,
			'Should throw InvalidOperationException when providing null parameters'
		);			
        test.done();
    },
	
	can_create_ContentPathSegment_with_a_list_with_correct_items_type: function (test) {		
		var list = new Array();
		list.push(new System.Web.Routing.PathSubsegment());
		
		var segment = new System.Web.Routing.ContentPathSegment(list);		
		assert.ok(segment.subsegments.length == 1);
		assert.ok(segment.subsegments[0] instanceof System.Web.Routing.PathSubsegment);
        test.done();
    },
	
	isCatchAll_should_return_true_if_there_is_an_item_is_ParameterSubsegment_and_has_isCatchAll_true: function(test) {
		var list = new Array();
		list.push(new System.Web.Routing.PathSubsegment());
		var paramSubsegment = new System.Web.Routing.ParameterSubsegment("*paramName");		
		list.push(paramSubsegment);
		
		var segment = new System.Web.Routing.ContentPathSegment(list);		
		assert.ok(segment.isCatchAll());		
        test.done();
	}
});