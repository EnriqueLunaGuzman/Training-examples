// Normal function
function print ( ): void {
    console.log('Printing....');
}
print( );

// Function expression
let addNumbers = function( num1: number, num2: number ): number {
    return num1 + num2;
}
addNumbers( 1, 2 );

//Arrow function
let multiplyNumbers = ( num1: number, num2: number ): number => {
    return num1 * num2;
}
multiplyNumbers( 2, 4 );

let multiplyNumbers2 = ( num1: number, num2: number ): number => num1 * num2;
multiplyNumbers2( 2, 4 );

//------------------------------------------

// Spread Operator (Arrays & Objects)
const numbers: number[] = [2, 12, 14, 16];
const numbersDup: number[] = [...numbers];

type mytype = {name: string, age: number};

const object: mytype = {name: 'Steve', age: 21};
const objectDup: mytype = {...object};

function save( obj: mytype ) {
    //mutate or modify
    obj.name = 'Tom';
    //save obj to db
}

save( {...object} );

//Destructuring Operator (Arrays & Objects)
const myHobbies2: string[] = ['baseball', 'cooking'];
// const hobby1 = myHobbies2[0];
// const hobby2 = myHobbies2[1];
const [hobby1, hobby2] = myHobbies2;

const userData2: mytype = {name: 'Steve', age: 21};
// const userName = userData2.name;
// const userAge = userData2.age;
const {age: userAge, name: userName} = userData2;

//------------------------------------------

// Template literals (string)
let userName3 = 'Steve';
let greeting = 'Hello' + userName3;

let greeting2 = `Hello ${userName3},
I am cool!`;
console.log(greeting2);
