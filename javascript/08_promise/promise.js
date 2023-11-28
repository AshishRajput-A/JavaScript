// promise variable
/*const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 1");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise Consumed.1");
});*/

//promise with out variable.
/*new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise Consumed.2");
});*/

//promise 3

/*const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ name: "Rajput Ashish", age: 19 });
  }, 1000);
}).then((user) => {
  console.log(user);
});*/

//promise 4
// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ name: "Ashish", password: "1123" });
//     } else {
//       reject("some thing went wrong");
//     }
//   }, 1000);
// });
// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((user_Name) => {
//     console.log("UserName .:", user_Name);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("The promise either resolve or rejected.");
//   });

//promise five

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ name: "Vijay Bhai", password: "1010" });
//     } else {
//       // handle promise usig async await and trt catch.
//       reject("Error:JS went wrong.");
//     }
//   }, 1000);
// });
// async function consumePromisefive() {
//   try {
//     const responce = await promiseFive;
//     console.log(responce);
//   } catch (err) {
//     console.log(err);
//   }
// }

// consumePromisefive();

//fetch data from url

// async function getAllData() {
//   try {
//     const responce = await fetch("https://api.github.com/users");
//     const data = await responce.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getAllData();

fetch("https://api.github.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error.:", err);
  });
