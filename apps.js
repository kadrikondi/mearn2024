const { people, age } = require("./user");
console.log(people);

age.forEach((ag) => {
  let agm = ag * 2;
  console.log(agm);
});

// let fname = "idris ola";

// function greeting() {
//   console.log("goood morninng " + fname);
// }

// greeting();

// let greet = () => {
//   console.log(`weldone  ${fname}`);
// };
// greet();
