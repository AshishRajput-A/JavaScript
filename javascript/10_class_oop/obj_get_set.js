const user = {
  _email: "ashish@gmail.com",
  _pass: "12345",

  get email() {
    return this._email;
  },
  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(user);

console.log(tea.email);
