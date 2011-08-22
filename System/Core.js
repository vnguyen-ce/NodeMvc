// Unitilties to extend objects
function _merge(from, to){	
	var props = Object.getOwnPropertyNames(from);
	var dest = to;
	props.forEach(function(name) {
		if (!(name in dest)) {
			var descriptor = Object.getOwnPropertyDescriptor(from, name);
			Object.defineProperty(dest, name, descriptor);
		}
		else {				
			dest[name] = _merge(from[name], to[name]);
		}
	});
	return dest;
}

Object.defineProperty(Object.prototype, "extend", {
    enumerable: false,
    value: function(from) {
        return _merge(from, this);
    }
});

Object.defineProperty(Object.prototype, "EnsureInterfaceIsImplemented", {
    enumerable: false,
    value: function(theInterface) {		
        for (var member in theInterface) {
			if ( (typeof this[member] != typeof theInterface[member]) ) {             
				throw "object failed to implement interface member '" + member + "'";
			}
		}    
		return true;
    }
});