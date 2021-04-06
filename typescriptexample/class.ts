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

//Abstrac class
abstract class Employee {
    name: string;
    id: string;

    constructor( name: string, id: string ) {
        this.name = name;
        this.id = id;
    }

    abstract getSalary( ): number;

    getDetails( ): string {
        return `Name: ${this.name} Id: ${this.id}`;
    }
}

class Developer extends Employee {
   
    getSalary( ) {
        return 7000;
    }
}

let tom = new Developer( 'Tom', 'EMP002' );
//------------------------------------------------------

//Interface
interface IEmployee1 {

    name: string;
    id: string;
    getDetails( ): string;

}

class Employee1 implements IEmployee1 {
    name: string;
    id: string;

    constructor( name: string, id: string ) {
        this.name = name;
        this.id = id;
    }

    getDetails( ): string {
        return `Name: ${this.name} Id: ${this.id}`;
    }
}

let emp1 = new Employee1( 'Mark', 'EMP004' );

interface IEmployeeNew extends IEmployee1 {
    age: number;
}

//---------------------------------------------------

class Encryptor {

    encryt( data: string ): string {
        return data;
    }

    decryt( data: string ): string {
        return data;
    }
}

//class SymmetricEncrytion {

//}

//class ASymmetricEncrytion {

//}

// usage
//let enc = new SymmetricEncrytion();
let enc = new Encryptor();
let result1 = enc.encryt('Hello');

// Encrytion cluster
interface IEncryption {
    encrypt( data: string ): string;
    decrypt( data: string ): string;
}

class SymmetricEncrytion implements IEncryption {
    encrypt( data: string ): string {
        return `xyz${data}`;
    }

    decrypt( data: string ): string {
        return data.slice(3);
    }
}

class AsymmetricEncrytion implements IEncryption {
    encrypt( data: string ): string {
        return `abc${data}`;
    }

    decrypt( data: string ): string {
        return data.slice(3);
    }
}

class CrazyEncrytion implements IEncryption {
    encrypt( data: string ): string {
        return `---${data}`;
    }

    decrypt( data: string ): string {
        return data.slice(3);
    }
}

// Persistance cluster
class Oracle {
    encObj: IEncryption;

    constructor( encObj: IEncryption ) {
        this.encObj = encObj;
    }

    save( data: string ): void {
        let encryptedData = this.encObj.encrypt(data);
        console.log('Oracle data :', encryptedData);
        // save 'encryptedData' to DB
    }
}

// Use Oracle to save data
// TODO: Read a config file & get what encryption is used
let dbObj = new Oracle(new CrazyEncrytion());
dbObj.save( 'Hello' );
//--------------------------------

// Interface in fuctions
interface IPerson {
    name: string;
    age: number;
}
function greet ( xyz: IPerson ) {
    console.log(`Hello ${xyz.name}`);
}

//usage
let person = {
    name: 'Steve',
    age: 21
}
greet( person );