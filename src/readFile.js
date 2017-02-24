var fs = require('fs'),
    q = require('q');

var readFile = function (filepath) {
    var promise = q.defer();
    fs.readFile( filepath, 'utf-8', function(err, content){
        if(err) promise.reject('no such file')

        if(content) promise.resolve(JSON.parse(content))
    })
    return promise.promise;
}

// readFile('file.json')
module.exports = readFile