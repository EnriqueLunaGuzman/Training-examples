//Client side - sending data (json format) to backend
let employee = {
    name: 'Steve',
    age: 23,
    code: 'EMP0023',
    departaments: ['Admin','HR']

};

let json = JSON.stringify(employee);
console.log(json);

//Client side - processing data (json format) recived from backend
let backendjson = '{ "name": "Tom", "age": 31, "code": "EMP0031", "departaments": ["Admin", "HR"]}';

let backendemployee = JSON.parse(backendjson);
console.log(employee);