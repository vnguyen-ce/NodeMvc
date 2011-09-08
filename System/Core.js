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

Object.defineProperty(Object.prototype, "inherit", {
    enumerable: false,
    value: function(from) {
        if (typeof (from) != 'function') {
            throw new Error('Can inherit from a class function only');
        }
        if (typeof (this) != 'function') {
            throw  new Error('Can call method on a class function only');
        }
        this.prototype = new from();        
        this.prototype._base = from.prototype;								
		
		if (from.prototype.getType != undefined) {
			var baseType = from.prototype.getType();
			
			var namespace = baseType.namespace.substring(0, baseType.namespace.indexOf('.'));		
			var name = this.name;			
			this.prototype.getType = function() {
				return {
					name: name,
					namespace: namespace + '.' + name,
					baseType: baseType
				};			
			}
		}
    }
});

Object.defineProperty(Object.prototype, "implement", {
    enumerable: false,
    value: function(anInterface) {    
        if (typeof (anInterface) != 'function') {
            throw new Error('Can implement an interface only');
        }
        if (typeof (this) != 'function') {
            throw new Error('Can call method on a function/class only');
        }        
        anInterface.prototype._isImplementing = true;
        this.prototype = new anInterface();
        anInterface.prototype._isImplementing = false;
         
        this.prototype.extend(this.prototype._contract);
        this.prototype._contract = null;
		
		if (anInterface.prototype.getType != undefined) {
			var baseType = anInterface.prototype.getType();
			//console.log(baseType);
			
			if (baseType.namespace == undefined){
				baseType.namespace = '';
			}
			var namespace = baseType.namespace.substring(0, baseType.namespace.indexOf('.'));		
			var name = this.name;			
			this.prototype.getType = function() {
				return {
					name: name,
					namespace: namespace + '.' + name,
					baseType: baseType
				};			
			}
		}
    }
});

function inheritFrom(type, newTypename, newNamespace) {	
    if (typeof (type) != 'function') {
        throw new Error('type must be a function');
    }
     
    // constructor with more than 3 params is not a good practice
    // in that case, param3 should be an object that contains the rest params
    var theClass = function(param1, param2, param3){
        type.call(this, param1, param2, param3);
    };    
     
    theClass.inherit(type);
	
	if (type.prototype.getType != undefined) {
		var baseType = type.prototype.getType();	
			
		theClass.prototype.getType = function() {
			return {
				name: newTypename,
				namespace: newNamespace,
				baseType: baseType
			};			
		}
	}
		
    return theClass;
}

function interface(name, contract, namespace /*rearrange the parameter after next commit*/){
    var _interface = function() {
        if (this._isImplementing !== true){
            throw new Error('Cannot initialize interface "' + name + '"');
        }    
         
        if (name === '' || typeof name !== 'string'){
            throw new Error('Must provide interface name');
        }
         
        if (contract == null || typeof contract !== 'object') {
            throw new Error('Must provide a contract as an object');
        }
         
        this._name = name;            
        this._contract = contract;    
    };        
	
	_interface.prototype.getType = function() {
		return{
			name: name,
			namespace: namespace,
			baseType:null
		};
	}
    return _interface;
}

module.exports = {
	inheritFrom : inheritFrom,
	interface: interface
};