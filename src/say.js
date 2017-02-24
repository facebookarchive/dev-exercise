var say = function (arg1) {

    let concatArgs = function(arg2){
        if( typeof arg1 == 'string' && typeof arg2 == 'string')
            return arg1+' '+arg2;
    }
    return concatArgs;
}
module.exports = say