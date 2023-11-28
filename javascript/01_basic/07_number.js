const score = 400;
// console.log(score);
// console.log(typeof score);

const balance = new Number(5000);
// console.log(balance);

const strnumber = balance.toString(); //  toString()  property is used to convert number into string.
// console.log(strnumber.length);
// console.log(typeof strnumber);

const numfix = balance.toFixed(2); // toFix()  is use to add zero after the number like 5000.00.
// console.log(numfix);

const othernum = 123.782; //toPrecision is used to send precision value like 124.43
// console.log(othernum.toPrecision(5));

const hundreds = 1000000; //  toLocalString() is use to add coma in number like 10,00,000
// console.log(hundreds.toLocaleString());

// console.log(Number.MAX_VALUE); // giver max value of number
// console.log(Number.MIN_VALUE); // giver min value of number
// console.log(Number.MAX_SAFE_INTEGER); // it is gives safe integer save in number 9007199254740991.

//Math  function in javascript
// console.log(Math.abs(-10)); // Math.abs() function in use  to change negative value into positive value.

// console.log(Math.round(4522.4343)); //  Math.round() is gives round value of number.

// console.log(Math.ceil(4.1)); // Math.ceil() is  gives always upper value like 4.1 = 5.

// console.log(Math.floor(55.464)); // Math.floor() is gives round value without any changes.

// console.log(Math.sqrt(49)); //  Math.sqrt() is gives square root of number like 49 = 7.

// console.log(Math.min(7, 3, 2, 4, 5)); // Math.min() is gives minimum vlaue.

// console.log(Math.max(7, 3, 2, 4, 5)); // Math.max() is gives maximum vlaue.

// console.log(Math.floor(Math.random() * 10 + 1));

const min = 1;
const max = 6;
// console.log(Math.floor(Math.random() * (max - min + 12) + min));

// console.log(typeof balance);

const num1 = new Number();
console.log(typeof num1);
