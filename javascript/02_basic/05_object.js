const course = {
  name: "java-script developer",
  price: 999,
  courseteacher: "hitesh sir",
};

console.log(course.courseteacher);
const { courseteacher: teacher } = course; // destructuring  of object

console.log(teacher);

const { price: money } = course;
console.log(money);
