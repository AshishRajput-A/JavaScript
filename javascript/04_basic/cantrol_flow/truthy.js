// const email = "false";
// if (email) {
//   console.log("Got an Email.");
// } else {
//   console.log("Dont have a user email.");
// }

// flalsy values
//false , 0 , -0 , Bigint 0n , "" , null ,undefine , NaN

// truthy values
// "false" , "0" , " " , {} , function(){}

//find empaty array
// const arr = [];
// if (arr.length === 0) {
//   console.log("Array is Empty");
// } else {//   console.log("Array has values.");
// }
//find object has empty
// const obj = {};
// if (Object.keys(obj).length === 0) {
//   console.log("object is empty");
// } else {
//   console.log("Object has value.");
// }

//Nullish Coalescing Operator (??) : null undefined

let var1;
// var1 = 5 ?? 10;
// var1 = null ?? 15;
// var1 = undefined ?? 14;
var1 = null ?? 10 ?? 20;

console.log(var1);

// terniary operator

// condition ? true : false

const marks = 55;

marks >= 35 ? console.log("Pass") : console.log("fail");
