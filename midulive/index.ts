

function saludar (name: String){
    console.log(`Hola ${name}`)
}

saludar('Pepe')



function saludarOtraVez({ name, age} : {name: string, age: number}){
    console.log(`Hola ${name},  tienes ${age} años`)
}

//Arrow function type syntax
const sumar = (a: number, b: number): number => {
    return a + b
}

//never --> never returning anything
function throwError (message: string) : never {
    throw new Error(message)
}


//TYPES

type Hero = {
    readonly id?: number,
    name: string,
    age: number,
    isActive?: boolean, //? means optional 
}

let hero: Hero = {
    name: 'thor',
    age: 1500
}

function createHero(hero: Hero): Hero {
    const { name, age } = hero
    return { name, age, isActive: true }
}

const thor = createHero({name: 'Thor', age: 1500})

