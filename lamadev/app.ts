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


//INTERFACES

interface IUser {
    username:string,
    email:string;
    age:number;
}

interface IEmployee extends IUser {
    employeeId: number
}

const emp: IEmployee = {
    username: 'tom',
    email: 'tom@gmail.com',
    age: 43,
    employeeId: 1,
}

const client: IUser = {
    username : 'tom',
    email: 'tom@gmail.com',
    age: 43,
}

//If you need to extend types use INTERFACES if not use TYPES


//GENERICS

interface IAuthor {
    id: number,
    username:string,
}

interface ICategory {
    id: number,
    title:string,
}

interface IPost {
    id: number,
    title: string,
    desc: string,
    extra: IAuthor[] | ICategory[]
}

interface IPostBetter<T> {
    id: number,
    title: string,
    desc: string,
    extra: T[]
}

const testMe : IPostBetter<String> = {
    id: 1,
    title: 'post title',
    desc: 'post desc',
    extra: ['str1', 'str2']
}

interface IPostEvenBetter <T extends object> {
    id: 1,
    title: 'post title',
    desc: 'post desc',
    extra: T[]
}

const testMe2 : IPostEvenBetter<IAuthor> = {
    id: 1,
    title: 'post title',
    desc: 'post desc',
    extra: [{id:1, username: 'tom'}]
}