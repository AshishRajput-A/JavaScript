const myobject = {
  js: "javascript",
  cpp: "c++ lananguage",
  s: "swift",
  rb: "ruby",
};

for (const key in myobject) {
  //   console.log(`${key} shortcut is for ${myobject[key]}`);
}

//array
const programming = ["c", "c++", "java", "php", "javascript"];

for (const key in programming) {
  //   console.log(programming[key]);
}

//map

const map = new Map();
map.set("in", "india");
map.set("fr", "france");
map.set("jp", "japan");
map.set("ln", "landon"); // we cannot iterate  map
// console.log(map);
for (const key in map) {
  console.log(key);
}

//for in loop is use to iterate objects
