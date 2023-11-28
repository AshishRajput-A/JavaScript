var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 15;
  c = 20;
  //   console.log("innre.:", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

//scoping throw function

function one() {
  const username = "Hitesh";
  function two() {
    const website = "youtube";
    console.log("Name.:", username);
  }
  two();
  //   console.log(website);      //  we can not use inner variable
}
// one();

//if else scoping
/*
if (true) {
  const name = "Ashish";
  if (true) {
    const website = " youtube";
    console.log(name + website);
  }
  //   console.log(website);  // we can't use inner variable.
}
*/
// +++++++++++++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++++++++++++
console.log("First call funciton.:", addone(5)); //we can call a function before funtion declration in js.
function addone(num) {
  return num + 1;
}

const addtwo = function (num) {
  return num + 2; // we can't call funciton expression before fuction declration.
};
console.log("First declare a function.:", addtwo(5));
