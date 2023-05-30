"use strict";

const mergeArrays = (...args) => {
  let result = [];
  args.forEach((x) => {
    result.push(...x);
  });
  return result;
};

const removeDuplicates = (...args) => {
  let temp = -Infinity;
  return args.sort().filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });
};
