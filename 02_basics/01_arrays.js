// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);

// Array methods

// myArr.push(6)

// myArr.unshift(9) Add the value at first indexx of the array
// myArr.shift()  // Remove the firts element of the array
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// console.log(typeof myArr);
// console.log(typeof newArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);

