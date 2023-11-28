function setUserName(name) {
  this.name = name;
}

function createUsername(name, email, password) {
  setUserName.call(this, name);
  this.email = email;
  this.password = password;
}

const user1 = new createUsername("chai", "chai@fb.com", "1121");

console.log(user1);
