const one = {
  name: "Motherchode",
  price: 999,
  login: function () {
    console.log(`Welcome ${this.name} to are website.`);
    console.log(this);
  },
};
// one.login();

// one.name = "Dinesh";
// one.login();

// one.name = "Lokesh";
// one.login();

// console.log(this);

const two = {
  name: "FunnyBoy",
  age: 15,
  data: function () {
    console.log(`${this.name} welcome to our site.`);
  },
};

// two.data();

function chai() {
  //   console.log(this);      // It gives multiple function...
  let user = "Ashish";
  //   console.log(this.user); // undefine
  // console.log(user);
}

// chai();

//Arrow  function

const greet = () => {
  let name = "Ashish";
  console.log("hello Ashish");
  console.log(this.name); // undefined    // this is only working on Objecta keys
  console.log(this); // {}
};
// greet();

//impletesite arrow function
// const addtwo = (n1, n2) => {
//   return n1 + n2;
// };
// console.log("Sum.:", addtwo(5, 5));

//explesete arrow function
// const addtwo = (n1, n2) => n1 + n2;
// console.log("Sum.:", addtwo(5, 5));

/*when we use implesite arrow function  than we have to use return method and when we use explesite arrow function than we can't use return function
 */

//object arrow function
const obj = {
  name: "Ashish",
  age: 19,
  state: "Gujarat",
};

const addtwo = (anyobj) => console.log(anyobj);
// console.log(addtwo(obj));

// is we use {} then we havw to return value otherwise no need to return in fat function just use in ()
