const createObject = function (str) {
    if (!(this instanceof createObject)) {
        return new createObject(str);
    }
    this.str = str;
}

createObject.prototype.getMessage = function () {
    return this.str;
}

module.exports = createObject;
