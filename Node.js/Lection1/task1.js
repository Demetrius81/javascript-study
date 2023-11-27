const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = numArr.reduce((acc, num) => (acc += num), 0);
console.log(`Result = ${sum}`);
