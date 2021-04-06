"use strict";
// Generics - separate logic from type
function echo(data) {
    return data;
}
echo('Hello');
echo(21);
echo(true);
echo({ name: 'Steve', age: 21 });
// generics function
function betterEcho(data) {
    return data;
}
betterEcho('Hello');
betterEcho(21);
betterEcho(true);
betterEcho({ name: 'Steve', age: 21 });
var myHobbies5 = ['cooking', 'baseball'];
var myHobbies6 = ['cooking', 'baseball'];
var myHobbies7 = [12, 15];
var myHobbies8 = [true, false];
var myHobbies9 = [{}, {}];
var Collection = /** @class */ (function () {
    function Collection() {
    }
    Collection.prototype.add = function (data) {
        console.log(data);
    };
    return Collection;
}());
var obj6 = new Collection();
obj6.add('Hello');
var obj7 = new Collection();
obj7.add({ name: 'Steve', age: 21 });
// let obj8 = new Collection<boolean>( );
// obj8.add(true);
