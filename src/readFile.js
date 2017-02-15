module.exports = function (file) {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        let obj = {};
        fs.readFile(file, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                obj = JSON.parse(data);
                resolve(obj);
            }
        });
    })
};
