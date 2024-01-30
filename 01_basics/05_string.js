const name = "Chirag"
const repoCount = 10

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Chirag-hc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne =  "       Chirag        "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "htps://chirag.com/chirag%20ranpise"
console.log(url.replace('%20', '-'));

console.log(gameName.split('-'));