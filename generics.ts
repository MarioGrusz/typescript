function getFirstElement<ElementType>(array: ElementType[]) { // or <T>
    return array[0]
}


const numbers = [1, 2, 3]
const firstNum = getFirstElement(numbers)


const strings = ['stringOne', 'stringTwo']
const firstString = getFirstElement(strings)


type ApiResponse<Data> = {
    data: Data
    isError : boolean
}

type UserResponse = ApiResponse<{ name: string; age: number}>
type BlogResponse = ApiResponse<{ name: string }>


const response: UserResponse  = {
    data: {
        name: 'Kyle',
        age: 28
    },
    isError: false,
}

const responseBlog: BlogResponse  = {
    data: {
        name: 'Kyle',
    },
    isError: false,
}