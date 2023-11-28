// class signup {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   enycryptPassword() {
//     return `#10asd${this.password}abc`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const user1 = new signup("Rajput Ashish", "ashish@google.com", "1103");
// console.log(user1.enycryptPassword());
// console.log(user1.changeUsername());

function login(username, email, password) {
  this.username = username;
  this.password = password;
  this.email = email;
}

login.prototype.encryptPasword = function () {
  return `#112${this.password}asbd`;
};

login.prototype.changepassword = function () {
  return `${this.username.toUpperCse()}`;
};

const user2 = new login("tea", "tea@yahoo.com", "2342");
console.log(user2);

console.log(user2.encryptPasword());
