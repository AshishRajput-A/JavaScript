let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;

for (let i = 0; i < a.length; i++) {
  sum += a[i];
}

console.log(sum);

let arr = a.reduce(function (x, y) {
  return x + y;
}, 0);

console.log(arr);
