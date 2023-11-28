//objects litrel

// const marval_heroes = ["Spidermen", "Ironmen", "Thor"];
// const dc_heros = ["batman", "falsh", "superman"];

// marval_heroes.push(dc_heros);
// console.log(marval_heroes);

//with using concat can only add two array .
// const allheros = marval_heroes.concat(dc_heros);
// console.log(allheros);

//with using spread we can add multiple array into one array
//so the proffecnally  people use spreade operator in js
// const spredheroes = [...marval_heroes, ...dc_heros];
// console.log(spredheroes);

//using flat(infinity) function you can open all the internal array in to one array.
// const another_array = [1, 2, 3, [4, 5, 6], [7, 8, [9]]];
// console.log(another_array);
// const realanother = another_array.flat(Infinity);
// console.log("Real.:", realanother);

const obj = { name: "Ashish", std: 12 }; //interesting
console.log(Array.isArray("Ashish")); // it gives a perticular value is a array or not.
console.log(Array.from("Ashish")); // it conver value in to array

const score1 = 100;
const score2 = 200;
const score3 = 300;
const score4 = 400;

const scorearr = Array.of(score1, score2, score3, score4);
console.log(scorearr);

//Read doc of array is of from  and spread rest
