"use strict";
var Student = /** @class */ (function () {
    function Student(name, id, group, admissionDate) {
        this.name = name;
        this.id = id;
        this.group = group;
        this.admissionDate = admissionDate;
    }
    Student.prototype.getDetails = function () {
        return "Name: " + this.name + " \n        Id: " + this.id + "\n        Group: " + this.group + "\n        Admision: " + this.admissionDate;
    };
    return Student;
}());
var stdn = new Student('Robert', '0126372', '105', 'July 26 95');
//Encryptor base class
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
var enc = new Encryptor();
var dataEnc = enc.encryt(stdn);
