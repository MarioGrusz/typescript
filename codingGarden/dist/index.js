let myName = 'Mario';
let isCool = true;
let favNumber = 42;
function add(a, b) {
    return a + b;
}
const numbersAndStrings = ["Panzer", 7, "CJ", 42];
console.log(numbersAndStrings);
let theAnswer = 42;
theAnswer = "42";
class Person {
    name;
    dogName;
    favNumber;
    constructor(name, dogName, favNumber) {
        this.name = name;
        this.dogName = dogName;
        this.favNumber = favNumber;
    }
}
const mario = new Person('Mario', 'Panzer', 42);
function greet(person) {
    return `Hello ${person.name}`;
}
