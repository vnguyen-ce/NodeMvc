// Unitilties to extend objects
function _merge(from, to){	
	var props = Object.getOwnPropertyNames(from);
	var dest = to;
	props.forEach(function(name) {
		if (!(name in dest)) {
			var descriptor = Object.getOwnPropertyDescriptor(from, name);
			Object.defineProperty(dest, name, descriptor);
		}
		else if(typeof(from[name]) == 'function' && typeof(to[name]) == 'function'){
			to[name] = from[name];
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

// Type check
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


Object.defineProperty(Object.prototype, "IsInstanceOf", {
    enumerable: false,
    value: function(theBaseType) {		
        for (var member in theBaseType) {
			if ( (typeof this[member] != typeof theInterface[member]) ) {             
				return false;
			}
		}    
		return true;
    }
});