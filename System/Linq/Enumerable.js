Array.prototype.any = function(delegate) {		
	for (var i=0; i < this.length; i++) {			
		if (delegate.apply(this, [this[i]]) === true) {
			return true;
		}
	}			
	return false;	
};