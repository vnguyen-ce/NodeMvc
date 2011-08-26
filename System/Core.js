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
		else if(typeof(from[name]) != 'object'){
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

Object.defineProperty(Object.prototype, "Inherit", {
    enumerable: false,
    value: function(from) {
        if (typeof (from) != 'function') {
            throw 'Can inherit from a class function only';
        }
        if (typeof (this) != 'function') {
            throw 'Can call method on a class function only';
        }
        this.prototype = new from();        
        this.prototype._base = from.prototype;
    }
});

Object.defineProperty(Object.prototype, "Implement", {
    enumerable: false,
    value: function(anInterface) {    
        if (typeof (anInterface) != 'function') {
            throw 'Can implement an interface only';
        }
        if (typeof (this) != 'function') {
            throw 'Can call method on a function/class only';
        }        
        anInterface.prototype._isImplementing = true;
        this.prototype = new anInterface();
        anInterface.prototype._isImplementing = false;
         
        this.prototype.extend(this.prototype._contract);
        this.prototype._contract = null;
    }
});

function inheritFrom(type) {
    if (typeof (type) != 'function') {
        throw 'type must be a function';
    }
     
    // constructor with more than 3 params is not a good practice
    // in that case, param3 should be an object that contains the rest params
    var theClass = function(param1, param2, param3){
        type.call(this, param1, param2, param3);
    };    
     
    theClass.Inherit(type);
    return theClass;
}

function interface(name, contract){
    var _interface = function() {
        if (this._isImplementing !== true){
            throw 'Cannot initialize interface "' + name + '"';
        }    
         
        if (name === '' || typeof name !== 'string'){
            throw 'Must provide interface name';
        }
         
        if (contract == null || typeof contract !== 'object') {
            throw 'Must provide a contract as an object';
        }
         
        this._name = name;            
        this._contract = contract;    
    };        
    return _interface;
}

module.exports = {
	inheritFrom : inheritFrom,
	interface: interface
};