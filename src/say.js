module.exports = function say (str1) {
    this.str1 = str1;
    return (str2) => {
        return this.str1+' '+ str2;
    }
}
