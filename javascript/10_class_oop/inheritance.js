class users {
  constructor(name) {
    this.name = name;
  }

  islogged() {
    console.log(`${this.name} logged-in successfully.`);
  }
}

class teacher extends users {
  constructor(name, email, pass) {
    super(name);
    this.email = email;
    this.pass = pass;
  }

  addcourse() {
    console.log(`Mater in Chemistry course is add by ${this.name} sir.`);
  }
}

const person1 = new teacher("Dinesh", "dinesh@gmail.com", "11321");
console.log(person1);
person1.islogged();
person1.addcourse();
