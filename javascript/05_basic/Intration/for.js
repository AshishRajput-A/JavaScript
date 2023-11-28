//tables
for (let i = 1; i <= 10; i++) {
  //   console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

//break and continue

for (let index = 1; index < 10; index++) {
  if (index == 5) {
    // console.log(`5 is detected `);
    break;
  }
  //   console.log(`value of index is ${index}`);
}

for (let index = 1; index < 10; index++) {
  if (index == 5) {
    console.log(`5 is deleted `);
    continue;
  }
  console.log(`value of index is ${index}`);
}
