function hello() {
  console.log("Hello Ashish");
}
// hello();

function addnumber(num1, num2) {
  // perameter

  console.log(num1 + num2);

  console.log("Please Enter Number Not String.");
}

// addnumber(5, 15); //argument

//return funciton
function multi(num1, num2) {
  return num1 * num2;
}
// console.log(multi(5, 5));
result = multi(4, 4);
// console.log(result);

// login

function loggedin(name) {
  if (!name) {
    console.log("Please Enter Username.");
    return;
  }
  return `${name} just log-in.`;
}

// console.log(loggedin("Dinesh"));

//shoping caert

function cartshopping(...product) {
  return product;
}
// console.log(cartshopping(100, 200, 300, 400));

// object as a perameter

const obj1 = {
  name: "Rajput Ashish",
  age: 19,
};
const obj2 = {
  name: "Rajput Vijay",
  age: 15,
};
function objecthandle(anyobject) {
  console.log(
    `Username is ${anyobject.name} and his age is ${anyobject.age} Years.`
  );
}
// objecthandle(obj1);
//

// getarray and gives second index value.

const myarr = [100, 200, 300, 400];
function getarray(anyarray) {
  return anyarray[1];
}

console.log(getarray([4, 5, , 6, 2]));

// ==> rest in function , array in function , object in function , log-in function
