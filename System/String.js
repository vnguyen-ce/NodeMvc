String.prototype.contains = function(str) {			
	return this.indexOf(str) != -1;
};



module.exports = {
	isNullOrEmpty: function(str){
		return str == null || str == '';
	}
};