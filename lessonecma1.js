"use strict";

const mergeArrays = (...args) => {
  let result = [];
  args.forEach((x) => {
    result.push(...x);
  });
  return result;
};

const removeDuplicates = (...args) =>
  args.filter((x, i) => args.indexOf(x) === i);

const getEventNumber = (arr) =>
  arr.filter((x) => {
    if (x % 2 === 0) {
      return x;
    }
  });

const calculateAverage = (arr) =>
  arr.reduce((acc, val) => acc + val) / arr.length;

const capitalizeFirstLetter = (str) =>
  str
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .reduce((acc, val) => acc + " " + val);

const createCalculator = (startNumber) => {
  let number = startNumber;
  return {
    add: (addNumber) => (number += addNumber),
    substract: (subtractNumber) => (number -= subtractNumber),
    getNumber: () => number,
  };
};

const createGreeting = (name) => () => console.log(`Hello, ${name}`);

const createPasswordChecker = (length) => (password) =>
  password.length >= length;

const sumDigits = (number) =>
  number === 0 ? 0 : (number % 10) + sumDigits(Math.floor(number / 10));

const a = [1, 2, 3];
const b = [4, 5, 6];

console.log(mergeArrays(a, b));

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
console.log(getEventNumber(arr));
console.log(arr);

console.log(calculateAverage(arr));

const str = "def grh hty tgb rfg hyj";
console.log(capitalizeFirstLetter(str));

const calc1 = createCalculator(5);
const calc2 = createCalculator(0);
calc1.add(5);
calc2.substract(5);
console.log(calc1.getNumber());
console.log(calc2.getNumber());

const greeting = createGreeting("John Doe");
greeting();

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid("password"));
console.log(isPasswordValid("secret"));

console.log(sumDigits(456789));
