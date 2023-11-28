function user(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email;
    },
    set: function (value) {
      this._email = value;
    },
  });
}

const chai = new user("chai@google.com", "chai");

console.log(chai.email);
