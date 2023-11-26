const colors = require("colors"); // 2 ->
require("colors"); // 1 ->
const { calculateResultSum } = require("./calculateResultSum");

const test_object_pack = require("test_object_pack");

let total = calculateResultSum([12.56, 23.05, 3.37], 0.9);

console.log(total > 50 ? `${total}`.red : `${total}`.green); // <- 1

total = calculateResultSum([45.57, 23.35, 73.37], 0.9);

console.log(total > 50 ? colors.red(`${total}`) : colors.green(`${total}`)); // <- 2

console.log(test_object_pack.getRandomObject());
