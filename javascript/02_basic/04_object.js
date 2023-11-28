//singleton objects

const tinderuser = new Object({}); // this is a singleton objects.

// const tinderuser = {};

tinderuser.id = "abc123";
tinderuser.name = "Ashish";
tinderuser.login = false;

// console.log(tinderuser);

//nesting object
const refularuser = {
  email: "some@gmail.com",
  userdetail: {
    name: "Rajput Ashish",
    age: 19,
    location: "Ahmedabad",
  },
  qualification: {
    education: "BCA",
    skills: "MERN stack developer",
  },
};

// console.log(refularuser.email);
// console.log(refularuser.qualification);
// console.log(refularuser.userdetail );

// console.log(refularuser.userdetail.age);
// console.log(refularuser.qualification.skills);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
//console.log("obj1.:", obj1, "obj2.:", obj2);

// const obj3 = { obj1, obj2 };

//Object.assign();
const obj4 = Object.assign(obj1, obj2); // when we can't use {} the all the values are save in obj1 .
console.log(obj4);
console.log(obj1);

const obj3 = Object.assign({}, obj1, obj2); // when we use {} all the value save in empaty object .
console.log(obj3);
console.log(obj1);

//using spread operator
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// console.log(tinderuser); // { id: 'abc123', name: 'Ashish', login: false }.
// console.log(Object.keys(tinderuser)); //  [ 'id', 'name', 'login' ].
// console.log(Object.values(tinderuser)); //  [ 'abc123', 'Ashish', false ].
// console.log(Object.entries(tinderuser)); // [ [ 'id', 'abc123' ], [ 'name', 'Ashish' ], [ 'login', false ] ].

// console.log(tinderuser.hasOwnProperty("login")); // properties are avalible on object or not.

//read doc  singleton objects , nesting object , Object.assign({}, obj1, obj2),Object.keys, Object.values ,Object.entries
