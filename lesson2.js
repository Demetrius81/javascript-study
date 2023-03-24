// let age = +prompt("Введите ваш возраст");
// console.log(age);
// alert(`Ваш возраст ${age} лет`);
// let userName = prompt(`Введите ваше имя`);
// console.log(userName);
// alert(`Добро пожаловать на сайт, ${userName}`);

// let a = 13;
// let b = 5;

// console.log(a % b);

// let a;
// alert(a);

// alert("abc" * 3);

// alert(1 / 0);

// alert(-1 / 0);

// alert("2" * "3");

// let a = "2";
// let b = "3";
// console.log(+a + +b);

// a = +prompt("first number");
// b = +prompt("second number");

// console.log(`сумма ${a + b}`);
// console.log(`разность${a - b}`);
// console.log(`произведение${a * b}`);
// console.log(`частное${a / b}`);
// console.log(`остаток${a % b}`);

// console.log(String(true));

// console.log("a" + true);

// console.log(Number(true));

// console.log(true + 1);

// console.log(true + true);

// console.log(true - true);

// console.log(String(true) + Number(true));

// let a = +prompt("enter number");

// if (a < 5) {
//   console.log("Число < 5");
// } else if (a > 5) {
//   console.log("Число > 5");
// } else {
//   console.log("Число = 5");
// }

// let test1 = 3;
// let test2 = "3";

// if (test1 === test2) {
//   console.log("Переменные равны");
// } else {
//   console.log("Переменные не равны");
// }

// let a = +prompt("enter first number");
// let b = +prompt("enter second number");

// if (a < b) {
//   console.log(`Minimum is ${a}`);
// } else if (b < a) {
//   console.log(`Minimum is ${b}`);
// } else {
//   console.log(`${a} = ${b}`);
// }

// let a = +prompt("enter number");

// if (a > 0 && a < 15) {
//   console.log(`variable 0 < ${a} < 15`);
// } else {
//   console.log(`variable ${a} does not fit the conditions`);
// }

// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log(arr.length);

// const temp = ["a", "b", "c"];

// console.log(temp);

// for (let i = 0; i < temp.length; i++) {
//   temp[i] = i + 1;
// }

// console.log(temp);

// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   arr[i]++;
// }

// console.log(arr);

// const arr = [];

// arr[3] = "a";
// arr[8] = "b";

// console.log(arr.length);

// const arr = [1, 2, 3];

// for (let i = 0; i < 2; i++) {
//   arr.push(i + 4);
// }

// console.log(arr);

// const arr = [1, 2, 3, 4, 5];

// for (let i = 3; i < 5; i++) {
//   arr.pop();
// }

// console.log(arr.length);

// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 99; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }

// let num = 1;
// let count = 0;
// while (num < 1000) {
//   num = num * 3;
//   count++;
// }

// console.log(num);
// console.log(count);

// const arr = [2, 5, 9, 15, 1, 4];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

// let sum = 0;
// for (let i = 2; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

let str = "";

for (let i = 1; i <= 9; i++) {
  if (i == 9) {
    str += "-" + i + "-";
  } else {
    str += "-" + i;
  }
}

console.log(str);

const arr = [2, 5, 9, 0, 3, 1, 4];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    break;
  }
  console.log(arr[i]);
}
