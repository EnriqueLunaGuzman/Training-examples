"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Object literal
var Obj3 = {
    name: 'Steve',
    age: 21,
    printAge: function () {
        console.log('Age....');
    }
};
//Obj3.printAge( );
// Class
// Template / Blueprint
// Scope: public, private, protected
// Initialization: constructor
// Extending: extends
var Person = /** @class */ (function () {
    function Person(name, age) {
        // private age: number;
        this.type = 'Person';
        this.name = name;
        this.age = age;
    }
    Person.prototype.printAge = function () {
        console.log('Age....');
    };
    return Person;
}());
// Using the Template / Blueprint
var john = new Person('Steve', 21);
john.printAge();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, major) {
        var _this = _super.call(this, name, age) || this;
        _this.major = '';
        _this.major = major;
        return _this;
    }
    return Student;
}(Person));
var mike = new Student('Mike', 23, 'Maths');
//--------------------------------
// Getters and Setters
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = '';
        this._age = 0;
    }
    Object.defineProperty(Person1.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value > 150) {
                console.log('Please give a value age: ');
                return;
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person1;
}());
var obj = new Person1();
obj.name = 'Steve'; //<--get this value from textbox
obj.age = 21; //<--get this value from textbox
function saveToDB(obj) {
    //save to adapter
}
//----------------------------------------------
//Static
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calculateCircumference = function (dia) {
        return Helper.PI * dia;
    };
    Helper.prototype.saveToDB = function () {
        console.log('save to DB....');
    };
    Helper.PI = 3.14;
    return Helper;
}());
var obj4 = Helper.calculateCircumference(12);
console.log(obj4);
var obj5 = new Helper();
console.log(obj5);
// let result4 - obj4.calculateCircumference ( 12 );
//Abstrac class
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.name = name;
        this.id = id;
    }
    Employee.prototype.getDetails = function () {
        return "Name: " + this.name + " Id: " + this.id;
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.getSalary = function () {
        return 7000;
    };
    return Developer;
}(Employee));
var tom = new Developer('Tom', 'EMP002');
var Employee1 = /** @class */ (function () {
    function Employee1(name, id) {
        this.name = name;
        this.id = id;
    }
    Employee1.prototype.getDetails = function () {
        return "Name: " + this.name + " Id: " + this.id;
    };
    return Employee1;
}());
var emp1 = new Employee1('Mark', 'EMP004');
//---------------------------------------------------
var Encryptor = /** @class */ (function () {
    function Encryptor() {
    }
    Encryptor.prototype.encryt = function (data) {
        return data;
    };
    Encryptor.prototype.decryt = function (data) {
        return data;
    };
    return Encryptor;
}());
var SymmetricEncrytion = /** @class */ (function () {
    function SymmetricEncrytion() {
    }
    return SymmetricEncrytion;
}());
var ASymmetricEncrytion = /** @class */ (function () {
    function ASymmetricEncrytion() {
    }
    return ASymmetricEncrytion;
}());
// usage
//let enc = new SymmetricEncrytion();
var enc = new Encryptor();
var result1 = enc.encryt('Hello');
