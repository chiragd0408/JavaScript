const marvel = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "Flash", "batman"]

// marvel.push(dc_heros)

// console.log(marvel);
// console.log(marvel[3][1]);

// const heros = marvel.concat(dc_heros)
// console.log(heros);

const allnewHeros = [...marvel, ...dc_heros]
// console.log(allnewHeros);

const another_array =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real = another_array.flat(Infinity)
console.log(real);

console.log(Array.isArray("Chirag"));
console.log(Array.from("Chirag"));
console.log(Array.from({name: " chirag"})); // interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));