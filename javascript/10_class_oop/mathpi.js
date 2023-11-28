Math.PI = 3.14;
// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

const chai = {
  name: "ginger chai",
  price: 250,
  place: "setelite",
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  console.log(`${key} : ${value}`);
}
