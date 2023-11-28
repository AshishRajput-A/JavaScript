// let a = 11;
// if (a % 2 == 0) {
//   console.log("Even Number");
// } else {
//   console.log("Odd Number");
// }

// const userlogin = true;
// if (userlogin == true) {
//   console.log("You are successfully login.");
// } else {
//   console.log("Please login.");
// }

// let n = 10;
// if (!isNaN(n)) {
//   console.log("This is Number.");               // enter value is number or not..
// } else {
//   console.log("This is Nan.");
// }

//scop  let var const
// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`you have a power of ${power}`);
// }
// console.log(power);

//prectice-1

const userlogin = true;
const dabitcard = true;
if (userlogin && dabitcard) {
  console.log("Allow to buy course.");
} else {
  console.log("You can't buy course.");
}

//log-in from google
const loginwithgoogle = false;
const loginfromemail = true;

if (loginfromemail || loginwithgoogle) {
  console.log(`Login successfully.`);
} else {
  console.log(`please log in..`);
}
