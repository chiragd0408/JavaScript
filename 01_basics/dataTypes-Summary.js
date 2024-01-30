// Primitive
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)
// Reference (Non Primtive)
// Array, Objects,Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Chirag",
    age: 22,
}

/* let myfunction = function () {
    console.log("Hello World");
} */

// ****************************************

// stack Memory(Primitive) make as copy
//  and Heap Memory(Non-Primitive) as a Original

let myYoutubename = "ChiragRanpisedotcom"
let anothername = myYoutubename
anothername = "ChaiaurCode"
console.log(anothername)

let userOne = {
    email: "user@gmail.com",
    upi: "7548@ybl"
}

let userTwo = userOne
userTwo.email = "Chirag48@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);