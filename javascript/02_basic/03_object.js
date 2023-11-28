const sym = Symbol("sym");

const obj = {
  name: "Ashish",
  email: "ashish@gmail.com",
  location: "Ahmedabad",
  fullname: "Rajput Ashish",
  [sym]: "mykey1",
};

// console.log(obj.email);

// console.log(obj[("email", "name")]);
// console.log(obj["fullname"]);
// console.log(typeof obj.sym); //  the symbole treat as a string
// console.log(obj[sym]);

// const mySymbol = Symbol("mySymbol");
// const myObject = {
//   [mySymbol]: "This is a symbol property",
// };
// console.log(myObject[mySymbol]); //  always when we take a symbole as a key in object use  [symbolename] other wise that symbole considred as a string
// console.log(typeof mySymbol);

// console.log(obj);

// obj.email = "fuckboy@gmail.com";
// Object.freeze(obj); // Object.freeze is use to freeze a object in javascript to the object cannot to rewriteable.
// obj.email = "janalode@gmail.com";
// console.log(obj);

obj.greetingone = function () {
  console.log("Hello dear object user.");
};
console.log(obj.greetingone());

obj.greetingtwo = function () {
  console.log(`Hello dear object user ${this.name}.`);
};

// Read  symbole ,[symbole value], Object.freeze() , obj.name , obj[name], obj.greeting(),
