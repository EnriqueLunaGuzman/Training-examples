"use strict";
// Decorators
function Encryption(abc) {
    // encryption here
    console.log('Encrypt from decorator!');
    var data = 'Encrypted data';
    // encrypt data
    abc.prototype.save(data);
}
//@Encryption
var Database = /** @class */ (function () {
    function Database(data) {
        this.data = data;
    }
    Database.prototype.save = function (data) {
        // database saving here
        console.log('Save to DB.....', data);
    };
    return Database;
}());
