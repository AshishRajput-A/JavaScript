const accountId = 1234321;
let email = "ashish@gmail.com";
var password = "12343";
// accountId = 111;
email = " hdfc@gmail.com";
password = "00000";
city = "Ahmedabad";

/*
Please not use var because of issue in block scope
and functional  scope
*/
console.log(accountId, email, password);
console.table([accountId, email, password, city]);

// var decration is a global or function scop , var variable can be  updated and  re-decleared
// let and const is a block scop ,  let  variable can be  updated but can't  re-decleared, while const not updated as well as not  re-decleared .
