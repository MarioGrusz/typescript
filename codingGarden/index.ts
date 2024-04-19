//Type Annotations

let myName: string = 'Mario';
let isCool: boolean = true;
let favNumber: number = 42;

function add(a : number, b: number){
    return a + b
}


//Union Types
//useful when dealing with APIs reposnses

const numbersAndStrings: (string | number)[] = ["Panzer", 7, "CJ", 42];
console.log(numbersAndStrings);

let theAnswer: string | number = 42;
theAnswer = "42"

//Objects and Interfaces

type StreamerType = 'affiliate' | 'partner'

// interface Person {
//     name: string;
//     favNumber: number;
//     dogName?: string;
//     streamerType : StreamerType
// }

// function greet(person: Person){
//     return `Hello ${person.name}`
// }

// console.log(greet({
//     name: 'Mario',
//     favNumber: 42,
//     streamerType: 'affiliate',
// }))

// function greetPersonAndDog(person: Person){
//     if(person.dogName){
//         return `Hello ${person.name} and their dog ${person.dogName}`
//     }
//     return greet(person)
   
// }

// console.log(greetPersonAndDog({
//     name: 'Mario',
//     favNumber: 42,
//     dogName: 'Blue',
//     streamerType: 'partner',
// }))

class Person {

    constructor(
        public name: string, 
        public dogName: string, 
        public favNumber: number,
        protected internalSecret: string,
        private pricviteSecret: string,
    ) {}
}

const mario = new Person('Mario', 'Panzer', 42, 'supersecret', 'supersupersecret')

function greet(person: Person){
    return `Hello ${person.name}`
}

