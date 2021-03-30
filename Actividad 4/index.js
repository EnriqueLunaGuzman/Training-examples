"use strict";
//Primitive types examples
var dogName = 'Jully';
var dogAge = 2;
var isVaccinated = false;
var dogColor = 'brown';
//Reference types examples
//Array
var favMovies = ['Stuck in Love', 'Avengers: EndGame', 'Justice League', 'Your Name'];
//Tuples
var ageToVote = [10, true];
//Enum
var Control;
(function (Control) {
    Control[Control["Up"] = 0] = "Up";
    Control[Control["Down"] = 1] = "Down";
    Control[Control["Left"] = 2] = "Left";
    Control[Control["Right"] = 3] = "Right";
})(Control || (Control = {}));
var controls = Control.Down;
//Function type
function pow(num1, num2) {
    return Math.pow(num1, num2);
}
pow(12, 13);
//Object type
var movies = {
    name: 'Creed',
    duration: '1:45',
    premiere: '26 January 2016',
    genres: ['drama', 'accion'],
    print: function (data) {
        console.log(data);
    }
};
var movie = {
    name: 'Creed',
    duration: '1:45',
    premiere: '26 January 2016',
    genres: ['drama', 'accion'],
    print: function (data) {
        console.log(data);
    }
};
var movieData;
movieData = movie;
