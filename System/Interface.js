function CheckInterface(theObject, theInterface) {
    for (var member in theInterface) {
        if ( (typeof theObject[member] != typeof theInterface[member]) ) {             
			throw "object failed to implement interface member " + member;
            return false;
        }
    }    
}