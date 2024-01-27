

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


//Intersection Types
type HeroId = `${string}-${string}-${string}-${string}-${string}-`
type HeroPowerScale = 'local' | 'planetery' | 'galactic' | 'universal' | 'multiuniversal'


//TYPES

type HeroBasicInfo = {
    name: string,
    age: number,
}

type HeroProperties = {
    readonly id?: string,
    isActive?: boolean, //? means optional 
    powerScale?: HeroPowerScale
}

type Hero = HeroBasicInfo & HeroProperties

let hero: Hero = {
    name: 'thor',
    age: 1500
}

function createHero(input: HeroBasicInfo): Hero {
    const { name, age } = input
    return { 
        id: crypto.randomUUID(), 
        name, 
        age, 
        isActive: true 
    }
}

const thor = createHero({name: 'Thor', age: 1500})
thor.powerScale = 'planetery'

//Arrays

const languages: (string | number)[] = []

languages.push('JavaScript')



