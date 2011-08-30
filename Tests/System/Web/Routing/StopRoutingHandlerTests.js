require('../../../../System/Core.js');
var assert = require("assert-extras");
var System = require('../../../../System');
	System.extend(require('../../../../System/Web'));
	System.extend(require('../../../../System/Web/Routing'));

var testCase = require('nodeunit').testCase;

module.exports = testCase({      
	can_create_StopRoutingHandler: function (test) {
		var handler = new System.Web.Routing.StopRoutingHandler();		
		assert.ok(handler instanceof System.Web.IHttpHandler);
        test.done();
    },
});