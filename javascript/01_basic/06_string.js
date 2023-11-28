/*
const stringdata = new String("Dinesh Rajput");
console.log(stringdata);

console.log(stringdata[0]);
console.log(stringdata.__proto__);
*/

const name = "Ashish is good boy";

// console.log(name.length); // find th length of string.

// console.log(name.toUpperCase()); //  convert string in uppercase.

//charat()
// console.log(name);
// console.log(name.charAt(7)); // find the which char exist in which position.

//indexof()
// console.log(name.indexOf("i")); // find the index of any char.

//subsctring()
// const real = name.substring(3, 8); // use to start and end point of string.
// console.log(real);

//slice() ;- The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
// const anotherString = name.slice(-12, 6);
// console.log(anotherString);

// const newString = Lokesh";
// console.log(newString);
// console.log(newString.trim()); // use tom trim whitespaces in string

// const url = "https://ashish.com/ashish%20rajput";
// console.log(url.replace("%20", "-")); // to search and replace any string.
// console.log(url.includes("ashish")); // use to find any char available in string or not.

// console.log(name.split(" "));

//The split()
// method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts
//these substrings into an array, and returns the array.
// const str = "The quick brown fox jumps over the lazy dog.";
// const words = str.split(" ");
// console.log(words[3]);

// replace and replaceAll()
// let a = "hello my name is ashish. ashish is very good boy. i lov you mr ashish";
// let b = a.replaceAll("ashish", "Pillay");
// console.log(b);

// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

let a = "hello i am rajput ashish live in ahmedabad ";
console.log(a.lastIndexOf("live"));
console.log(a.search("ashish"));
console.log(a.includes("ashish")); // include() is case sencetive ES6 feature
