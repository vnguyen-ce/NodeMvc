require('./Core.js');
var string = require('./String.js');
var System = System || {};

System.Type = function(type, typeName, typeNamespace) {		
	if (type != null && type instanceof Object)	{
		this.name = string.isNullOrEmpty(typeName) ? type.name : typeName;
		this.namespace = string.isNullOrEmpty(typeNamespace) ? type.namespace : typeNamespace;
		this.baseType = null;
	}
	else if (type != null && type instanceof System.Type)	{
		this.name = string.isNullOrEmpty(typeName) ? type.name : typeName;
		this.namespace = string.isNullOrEmpty(typeNamespace) ? type.namespace : typeNamespace;
		this.baseType = type;
	}	
	else if (!string.isNullOrEmpty(typeName) && !string.isNullOrEmpty(typeNamespace)) {
		this.name = typeName;
		this.namespace = typeNamespace;
		this.baseType = null;
	}
	else {
		throw new Error('Provide invalid parameters when creating a Type');
	}
}

System.Type.prototype.getType = function() {
	return new System.Type(null, 'Type', 'System.Type');
}

module.exports = System;