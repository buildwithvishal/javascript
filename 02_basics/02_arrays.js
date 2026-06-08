const marvel_heros = ["ironman", "thor", "spiderman"]

const dc_heros = ["flash","superman", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const new_heros = marvel_heros.concat(dc_heros);
// const all_heros = [...marvel_heros, ...dc_heros]; //spread operator (glass drop kiya or spread ho gaya)

// console.log(new_heros);
// console.log(all_heros);

// console.log(Array.isArray("hitesh"));
// console.log(Array.from("hitesh"));
// console.log(Array.from({new : "vishal"})) //interesting : empty array return karta hai pehle batana padta hai ki keys se array banani hai ya value se if nahi clarify karte toh empty array return kar deta hai

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) // of operator returns a new array by combining different variables 
