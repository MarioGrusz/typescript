let testStringArray : string [] // type array with strings elements

let testNumberArray : number []

let testStrigOrNumberArray : (string | number) []

//object

let user = {
    username: 'john',
    age: 22,
    isAdmin: false
}


//type
let userObj : {
    username: string
    age: number
    isAdmin: boolean
    phone?: string //? means optional
}

userObj = {
    username: 'john',
    age:23,
    isAdmin: false,

}

//functions
//belowe funcs are the same

let multiply1 = (num : number) => {
    return num * 2
}

let multiply2 = (num: number) : number => { //param number and return number
    return num * 2
}

//optional param
let sum = (num1 : number, num2: number, optionalParam?:number ) =>{
    return num1 + num2
}

//TYPE ALIASES

type UserType = {
    username: string;
    age: number;
    phone?: string;
}

let betterFunc = (user : UserType) => {
    console.log(user.username)
}