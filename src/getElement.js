const   jsdom = require("jsdom").jsdom;

function getElement (document, selector) {
    return document.querySelector(selector) ?  
        document.querySelector(selector) : null
}

module.exports = getElement