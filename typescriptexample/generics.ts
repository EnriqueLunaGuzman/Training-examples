// Generics - separate logic from type
function echo( data: any): any {
    return data;
}

echo('Hello');
echo(21);
echo(true);
echo({name: 'Steve', age: 21});

// generics function
function betterEcho<T> ( data: T): T {
    return data;
}
betterEcho<string>('Hello');
betterEcho<number>(21);
betterEcho<boolean>(true);
betterEcho<{name: string, age: number}>({name: 'Steve', age: 21});

let myHobbies5: any[] = ['cooking', 'baseball'];
let myHobbies6: Array<string> = ['cooking', 'baseball'];
let myHobbies7: Array<number> = [12, 15];
let myHobbies8: Array<boolean> = [true, false];
let myHobbies9: Array<{}> = [{}, {}];

type myType = {name: string, age: number};

class Collection<T extends string | mytype> {

    add( data: T) {
        console.log(data);
    }
}

let obj6 = new Collection<string>( );
obj6.add('Hello');

let obj7 = new Collection<mytype>( );
obj7.add({name: 'Steve', age: 21});

// let obj8 = new Collection<boolean>( );
// obj8.add(true);