function swap(a, b) {
  [a, b] = [b, a];

  return [a, b];
}

let x = 1;
let y = 2;

console.log(`x = ${x} , y = ${y} `);

[x, y] = swap(x, y);

console.log(`x = ${x} , y = ${y} `);
