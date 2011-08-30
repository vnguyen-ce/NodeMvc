require('../../../../System/Core.js');
var assert = require("assert-extras");
var System = require('../../../../System');
	System.extend(require('../../../../System/Web'));
	System.extend(require('../../../../System/Web/Routing'));

var testCase = require('nodeunit').testCase;

module.exports = testCase({      
	RouteTable_should_be_static_object: function (test) {		
		assert.ok(System.Web.Routing.RouteTable instanceof Object);		
		assert.ok(System.Web.Routing.RouteTable.Routes instanceof System.Web.Routing.RouteCollection);		
		assert.equal(0, System.Web.Routing.RouteTable.Routes.length);		
        test.done();
    },
});