//primitive type
let a = 3;
let b;

b = a;
a = 2;

console.log(a);
console.log(b);

//reference type
let a1 = { greeting: 'Hi'};
let b1;

b1 = a1;
a1.greeting = 'Hello';

console.log(a1);
console.log(b1);