let numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  //   console.log(num);
}

let myarray = [
  "superman",
  "flash",
  " thor",
  "spiderman",
  "blackadam",
  "hulk",
  "ironman",
];

for (const heros of myarray) {
  //   console.log(`my hero  is ${heros}`);
}

//Maps

const map = new Map();
map.set("in", "india");
map.set("fr", "france");
map.set("jp", "japan");
map.set("ln", "landon");
console.log(map);
for (const [key, value] of map) {
  console.log(key, "-", value);
}

//objects
// const obj1 = {
//   game1: "BGMI",
//   game2: "FREEFIRE",
//   game3: "ZOMBIE FIRE",            // we cannot iterate object in for of
//   game4: "TEMPLE RUN",
// };
// for (const [keys, value] of obj1) {
//   //   console.log(keys, "-", value);
// }

// for of loop is use to iterate array
