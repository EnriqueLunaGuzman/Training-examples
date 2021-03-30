//console.log('Hello World');

//primitive types
//let xyz = 'Steve';
//xyz = 'Tom1';
//console.log(xyz);

//primitive types
let myName: string = 'Steve';
let myAge: number = 21;
let hasJob: boolean = true;
let color: any = 'white';

//reference types
//Array
let myHobbies: string[] = ['cooking','baseball'];

//Tuples
let myAdress: [string, number] = ['Park street', 24];

//Enum
enum Color {
    Grey,
    Green = 100,
    Red
}

let myColor: Color = Color.Red;

//Function
function sayHello(name: string) : string{
    //console.log(name);
    return 'Hello $(name)';
}
let result: string = sayHello('Steve');
//sayHello('Hello');

function print(): void {
    console.log('Printing.....');
}

print();

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

multiply(12,13);

function PrintMe (data: string): string {
    return 'Hello $(data)';
}

//Fuction type
let greetings: (a: string)=>string;
greetings = PrintMe;
greetings('Steve');

//Object
type Complex = { name: string, age: number, hobbies: string[], print: (x: string)=>void};

let user = {
    name: 'Steve',
    age: 21,
    hobbies: ['cooking','baseball'],
    print: function(data: string): void{
        console.log(data);
    }
}

let userData: Complex;
userData = user;

