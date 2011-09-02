require('../../../../System/Core.js');
var assert = require("assert-extras");
var System = require('../../../../System');
	System.extend(require('../../../../System/Web'));
	System.extend(require('../../../../System/Web/Routing'));

var testCase = require('nodeunit').testCase;

module.exports = testCase({      
	_getLiteral_should_return_value_having_double_bracket_replaced_by_1_bracket: function (test) {
		var url = '{{controller}}/{{action}}/{{id}}';			
		assert.equal('{controller}/{action}/{id}', System.Web.Routing.RouteParser._getLiteral(url));		
        test.done();
    },
	
	_getLiteral_should_return_null_if_after_replace_string_having_1_bracket: function (test) {
		var url = '{{controller}}/{{action}}/{{id}}}';			
		assert.equal(null, System.Web.Routing.RouteParser._getLiteral(url));			
        test.done();
    },
	
	_indexOfFirstOpenParameter_should_return_negative_one_if_there_is_no_bracket_in_the_string: function (test) {		
		assert.equal(-1, System.Web.Routing.RouteParser._indexOfFirstOpenParameter('any-string-with_no_bracket'));			
        test.done();
    },
	
	_indexOfFirstOpenParameter_should_return_value_if_it_is_the_last_char_in_the_string: function (test) {		
		assert.equal(3, System.Web.Routing.RouteParser._indexOfFirstOpenParameter('abc{'));			
        test.done();
    },
	
	_indexOfFirstOpenParameter_should_return_value_if_it_is_not_the_last_char_in_the_string_and_the_next_char_is_not_bracket: function (test) {		
		assert.equal(3, System.Web.Routing.RouteParser._indexOfFirstOpenParameter('abc{id}'));			
        test.done();
    },
	
	_indexOfFirstOpenParameter_should_find_next_value_if_it_is_not_the_last_char_in_the_string_and_the_next_char_is_bracket: function (test) {		
		var url = '{{controller}}/{{action}}/{id}';		
		assert.equal(26, System.Web.Routing.RouteParser._indexOfFirstOpenParameter(url));			
        test.done();
    },
	
	_indexOfFirstOpenParameter_should_return_negative_1_if_it_cannot_find_the_bracket_that_match_condition: function (test) {		
		var url = '{{controller}}/{{action}}/{{id}}';		
		assert.equal(-1, System.Web.Routing.RouteParser._indexOfFirstOpenParameter(url));			
        test.done();
    },
	
	_isSeparator_should_return_true_if_string_equals_to_foward_slash: function(test) {
		assert.equal(true, System.Web.Routing.RouteParser._isSeparator('/'));		
		assert.equal(false, System.Web.Routing.RouteParser._isSeparator('//'));		
		assert.equal(false, System.Web.Routing.RouteParser._isSeparator('a'));		
		test.done();
	}
});