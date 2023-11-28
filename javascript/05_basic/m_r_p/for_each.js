const coding = ["c", "c++", "java", "php", "javascript", "ExpressJs"];
//for each can't return a value.
const values = coding.forEach((item) => {
  //   console.log(item);
  //   return values;         // we cannot initilized for each loop into  values variable.
});
// console.log(values); // undefined

//filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const num1 = numbers.filter((num) => num > 5);
// console.log(num1)
//                    (or)
const num1 = numbers.filter((num) => {
  return num > 5;
});
// console.log(num1);

//       throw for each loop
const newarr = [];
numbers.forEach((num) => {
  if (num > 5) {
    newarr.push(num);
  }
});
// console.log(newarr);

// object filter eaxple

const books = [
  { title: "onebook", genre: "science", public: "2002" },
  { title: "twobook", genre: "math", public: "2004" },
  { title: "threebook", genre: "ss", public: "2001" },
  { title: "fourbook", genre: "history", public: "2005" },
  { title: "fivrbook", genre: "fiction", public: "2008" },
  { title: "sixbook", genre: "science", public: "2010" },
  { title: "sevenbook", genre: "fiction", public: "2015" },
];
const userbook = books.filter((item) => {
  return item.genre === "math";
});
// console.log(userbook);

const usebook = books.filter((bk) => {
  return bk.public > 2001 && bk.genre === "science";
});
console.log(usebook);

// filter can return only true values..
