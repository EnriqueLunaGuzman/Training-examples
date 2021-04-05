//Interface for encryptor
interface IStudent {

    name: string;
    id: string;
    group: string;
    admissionDate: string;
    getDetails( ): string;

}

class Student implements IStudent {
    name: string;
    id: string;
    group: string;
    admissionDate: string;

    constructor( name: string, id: string, group: string, admissionDate: string ) {
        this.name = name;
        this.id = id;
        this.group = group;
        this.admissionDate = admissionDate;
    }

    getDetails( ): string {
        return `Name: ${this.name} 
        Id: ${this.id}
        Group: ${this.group}
        Admision: ${this.admissionDate}`;
    }
}

let stdn = new Student( 'Robert', '0126372', '105', 'July 26 95' );

interface IStudentNew extends IStudent {
    degree: string;
}

//Encryptor base class

class Encryptor {

    encryt( data: object ): object {
        return data;
    }

    decryt( data: object ): object {
        return data;
    }
}

let enc = new Encryptor();
let dataEnc = enc.encryt(stdn);