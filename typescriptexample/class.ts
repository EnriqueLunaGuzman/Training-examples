//Object literal
let Obj3 = {
    name: 'Steve',
    age: 21,
    printAge: function( ) {
        console.log('Age....');
    }
}
//Obj3.printAge( );

// Class
// Template / Blueprint
// Scope: public, private, protected
// Initialization: constructor
// Extending: extends
class Person {

    public name: string;
    public age: number;
    // private age: number;
    protected type: string = 'Person';

    constructor( name: string, age: number ) {
        this.name = name;
        this.age = age;
    }

    public printAge( ) {
        console.log('Age....');
    }
}

// Using the Template / Blueprint
const john = new Person( 'Steve', 21 );
john.printAge();

class Student extends Person {
    public major: string = '';

    constructor( name: string, age: number, major: string ) {
        super( name, age );
        this.major = major;
    }

}

const mike = new Student( 'Mike', 23, 'Maths' );

//--------------------------------

// Getters and Setters

class Person1 {
    public name: string = '';
    private _age: number = 0;

    get age( ) {
        return this._age;
    }

    set age( value: number ) {
        if ( value > 150 ) {
            console.log('Please give a value age: ')
            return;
        }
        this._age = value;
    }
}

let obj = new Person1();
obj.name = 'Steve'; //<--get this value from textbox
obj.age = 21;       //<--get this value from textbox

function saveToDB( obj: Person1 ) {
    //save to adapter
}

//----------------------------------------------

//Static
class Helper {
    static PI: number = 3.14;

    static calculateCircumference( dia: number ) {
        return Helper.PI * dia;
    }

    saveToDB( ) {
        console.log('save to DB....')
    }
}

let obj4 = Helper.calculateCircumference ( 12 );
console.log(obj4);

let obj5 = new Helper( );
console.log(obj5);
// let result4 - obj4.calculateCircumference ( 12 );