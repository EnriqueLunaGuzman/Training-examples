"use strict";
//Object literal
var Obj3 = { name: 'Steve', age: 21 };
// Class
// Template / Blueprint
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.printAge = function () {
        console.log('Age....');
    };
    return Person;
}());
// Object
var john = new Person();
john.printAge();
