const coding = ["c", "c++", "java", "php", "javascript", "ExpressJs"];

// coding.forEach(function (val) {
//   console.log(val);
// });

// coding.forEach((val, index, arr) => {
//   console.log(val, index, arr);
// });

const mycoding = [
  { language: "javascript", languagefile: ".js" },
  { language: "c", languagefile: ".c" },
  { language: "c++", languagefile: ".cpp" },
  { language: "React", languagefile: ".rsx" },
];

mycoding.forEach((value) => {
  console.log(value.languagefile);
});

// for each operator is use to itrete array of objecs [{},{},{},{},{}].
