// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// arr.push(6);
// arr.push(7);    //push is use to add value in last position.
// console.log(arr);

// arr.pop();       // pop is use to  remove a value from last position.
// console.log(arr);

// arr.unshift(9);    // unshift is use to add value in first positon in  array.
// console.log(arr);

// arr.shift();   // shift is use to remove a value from a first posotion in array.
// console.log(arr);

// console.log(arr.includes(4)); // function is use to see value avalible in array or not.
// console.log(arr.indexOf(3)); // find tha index any value.

// const newarr = arr.join(); // join function convert array into  coma seprated string.
// console.log(newarr);
// console.log(typeof newarr);

const arr1 = [0, 1, 2, 3, 4, 5];
console.log("First", arr1);

const myarr1 = arr1.slice(1, 3); //  slice is not manuplating main array.
console.log("A", arr1);
console.log(myarr1);

const myarr2 = arr1.splice(1, 2); // splice is manuplating main array and gives output.
console.log(myarr2);
console.log("B", arr1);

// Read doc push() pop() shift() unshift()  slice() splice()
