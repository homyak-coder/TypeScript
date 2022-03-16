
const concat = (first: string, second: string): void => {
    console.log(first + second)
}

concat('Hello ', 'World') // -> Hello World;

interface Hometask {
    howIDoIt: string,
    simeArray: [string, string, number],
    withData: [{
        howIDoIt: string,
        simeArray: [string, number]
    } ]
}



const myHometask: Hometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

interface MyArray<T> {
    [N: number]: T;

    reduce<U>(fn: (first: T, el: T, index?: T) => U): U
}

const tsArr: MyArray<number> = [1,2,3,4];

tsArr.reduce((first, el) => first + el)