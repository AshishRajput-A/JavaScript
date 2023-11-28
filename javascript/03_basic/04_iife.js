// Imediately Invocked Function Expressions (IIFE)
// kai baar global scope ke polution se bhachne ke liye iife ka use kete he
// wo function turant execute hote he use iife kehte he

let a = 1;
(function chai() {
  let a = "Ashish"; // named iife
  console.log(a);
})();

// (function greet(name) {
//   console.log(`Hello ${name}.`); // unnamed iife
// })("Pinku");

function one() {
  console.log("i am First ");
  two();
}
function two() {
  console.log("i am Second ");
  three();
}
function three() {
  console.log("i am Thirt ");
}

// one();
// one(two(three()));
