const mathlib = require('./mathlib')();
const num1 = 3;
const num2 = 940;

// var sum = mathlib.add(2,3);
// console.log(sum);

console.log(
  `The sum of ${num1} and ${num2} is ${mathlib.add(num1,num2)}.`
);

console.log(
  `The product of ${num1} and ${num2} is
  ${mathlib.multiply(num1,num2)}.`
);

console.log(
  `${num1} squared is ${mathlib.square(num1)}.`
);

console.log(
  `A random integer between ${num1} and ${num2} is
  ${mathlib.random(num1,num2)}.`
);