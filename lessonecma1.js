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
