var MyObject = (function(){
    
    function MyObject(message){
        this.message = message || 'not defined';
    }

    //add getMessage method to prototype chain
    MyObject.prototype.getMessage = function(){
        return this.message; 
    }

    return MyObject;
}())


var createObject = function(message){
    return new MyObject(message);
}

module.exports = createObject
