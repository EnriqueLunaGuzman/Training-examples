// Decorators
function Encryption( abc: Function) {
    // encryption here
    console.log('Encrypt from decorator!');
    let data = 'Encrypted data';
    // encrypt data
    abc.prototype.save( data );
}

//@Encryption
class Database {
    data: string;

    constructor( data: string ) {
        this.data = data;
    }

    save( data: string ) {
        // database saving here
        console.log('Save to DB.....', data);
    }
}