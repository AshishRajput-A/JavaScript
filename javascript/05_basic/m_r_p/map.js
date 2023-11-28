const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// when we open  {} then we have to write retuen value.
//map will return all values true and false both
// const number1 = mynum.map((num) => num + 10);
// console.log(number1);

const number2 = mynum.map((num) => num * 10).filter((num) => num > 50);
console.log(number2);

//we can also use multiple map , filter both combine
