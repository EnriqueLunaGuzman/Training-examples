"use strict";
//console.log('Hello World');
//primitive types
//let xyz = 'Steve';
//xyz = 'Tom1';
//console.log(xyz);
//primitive types
var myName = 'Steve';
var myAge = 21;
var hasJob = true;
var color = 'white';
//reference types
//Array
var myHobbies = ['cooking', 'baseball'];
//Tuples
var myAdress = ['Park street', 24];
//Enum
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myColor = Color.Red;
//Function
function sayHello(name) {
    //console.log(name);
    return 'Hello $(name)';
}
var result = sayHello('Steve');
//sayHello('Hello');
function print() {
    console.log('Printing.....');
}
print();
function multiply(num1, num2) {
    return num1 * num2;
}
multiply(12, 13);
function PrintMe(data) {
    return 'Hello $(data)';
}
//Fuction type
var greetings;
greetings = PrintMe;
greetings('Steve');
var user = {
    name: 'Steve',
    age: 21,
    hobbies: ['cooking', 'baseball'],
    print: function (data) {
        console.log(data);
    }
};
var userData;
userData = user;
//Union type
//let myAge2: number | string - 27;
var myObj = null;
