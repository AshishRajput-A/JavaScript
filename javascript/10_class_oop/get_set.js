class login {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password;
  }
  set password(value) {
    this._password = value;
  }
}

const user1 = new login("ashish@google.com", 1234);
console.log(user1.email);
console.log(user1.password);
