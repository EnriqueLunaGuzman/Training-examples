//Primitive types examples
let dogName: string = 'Jully';
let dogAge: number = 2;
let isVaccinated: boolean = false;
let dogColor: any = 'brown';

//Reference types examples

//Array
let favMovies: string[] = ['Stuck in Love','Avengers: EndGame','Justice League', 'Your Name'];

//Tuples
let ageToVote: [number, boolean] = [10, true];

//Enum
enum Control {
    Up,
    Down,
    Left,
    Right
}
let controls: Control = Control.Down;

//Function type
function pow(num1: number, num2: number): number {
    return Math.pow(num1,num2);
}
pow(12,13);

//Object type
let movies = {
    name: 'Creed',
    duration: '1:45',
    premiere: '26 January 2016',
    genres: ['drama','accion'],
    print: function(data: string): void{
        console.log(data);
    }
}

//Custom type
type Movie = { name: string, duration: string, premiere: string, genres: string[], print: (x: string)=>void};

let movie = {
    name: 'Creed',
    duration: '1:45',
    premiere: '26 January 2016',
    genres: ['drama','accion'],
    print: function(data: string): void{
        console.log(data);
    }
}

let movieData: Movie;
movieData = movie;
