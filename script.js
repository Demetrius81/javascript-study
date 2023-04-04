// console.log("текст из script.js");

// const num = 123;
// console.log(num);

// let a = 5;
// a = 7;
// console.log(a);

// let b = 1 + 2 + 3;
// console.log(b);

// //test comment
// /*
// test comment
// */
// console.log("-----------------------------");
// const c = 10;
// const d = 2;

// const sum = c + d;
// const difference = c - d;
// const product = c * d;
// const quotient = c / d;
// console.log(sum);
// console.log(difference);
// console.log(product);
// console.log(quotient);
// console.log(sum + difference + product + quotient);
// console.log("-----------------------------");

// a = 5 + 5 * 3 + 3;
// console.log(a);
// a = 8 / 2 + 2;
// console.log(a);
// a = (2 + 3) * (2 + 3);
// console.log(a);
// a = (2 + 3) * 2 + 3;
// console.log(a);
// a = (2 * 8) / 4;
// console.log(a);
// a = 2 * (8 / 4);
// console.log(a);
// console.log("-----------------------------");

// a = 1.5;
// b = 0.75;
// console.log(a + b);
// a = -400;
// console.log(-a);
// console.log("-----------------------------");

// let name = "Dimitry";
// let surName = "Ryzhov";
// console.log(`${name}\n${surName}`);

// let java = "java";
// let script = "script";
// console.log(java + script);

// let hello = "Hello";
// let world = "World";
// console.log(hello + ", " + world + "!");

// console.log("Task 1");
// console.log("-----------------------------");

// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log("-----------------------------");

// const arr2 = [];

// for (let i = 0; i < 100; i++) {
//   arr2.push(Math.random(Number));
//   if (i < 5) {
//     console.log(arr2[i]);
//   }
// }

// console.log(arr.length);

// console.log("-----------------------------");

// const arr3 = ["a", "b", "c"];

// for (let i = 0; i < arr3.length; i++) {
//   arr3[i] = i + 1;
//   console.log(arr3[i]);
// }

// console.log("-----------------------------");
// console.log("Task 2");
// console.log("-----------------------------");

// for (let i = 0; i < arr.length; i++) {
//   arr[i]++;
// }

// console.log(arr);

// console.log("-----------------------------");

// const arr4 = [];

// arr4[3] = "a";
// arr4[8] = "b";

// console.log(arr4.length);

// console.log("-----------------------------");

// arr5 = [1, 2, 3];

// arr5.push(4);
// arr5.push(5);

// console.log(arr5);

// console.log("-----------------------------");

// const arr6 = arr5.filter((i) => {
//   if (i < 4) {
//     return i;
//   }
// });

// arr5.splice(3, 2);

// console.log(arr6);
// console.log(arr5);

// console.log("-----------------------------");

function createArray(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random(Number) * 100));
  }

  return arr;
}

// console.log(createArray(5));

// console.log("-----------------------------");
// console.log("Task 3");
// console.log("-----------------------------");

// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }

// console.log("-----------------------------");

// for (let i = 1; i <= 99; i++) {
//   if (i % 2) {
//     console.log(i);
//   }
// }

// console.log("-----------------------------");

// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }

// console.log("-----------------------------");

// let num = +prompt("Введите число от 1 до 1000"); //валидация
// let count = 0;

// while (num < 1000) {
//   num *= 3;
//   count++;
// }

// console.log(`Произведено ${count} итераций, получено число ${num}.`);

// console.log("Task 4");
// console.log("-----------------------------");

// let arr = [2, 5, 9, 15, 1, 4];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 10 && arr[i] > 3) {
//     console.log(arr[i]);
//   }
// }

// console.log("-----------------------------");

// let sum = 0;

// for (let i = 2; i <= 100; i += 2) {
//   sum += i;
// }

// console.log(sum);

// console.log("-----------------------------");

// arr = [2, 5, 9, 3, 1, 4];

// sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// console.log("-----------------------------");

// let str = "";

// for (let i = 1; i <= 9; i++) {
//   if (i !== 9) {
//     str += "-" + i;
//   } else {
//     str += "-" + i + "-";
//   }
// }

// console.log(str);

// console.log("-----------------------------");

// arr = [2, 5, 9, 0, 3, 1, 4];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     break;
//   }
//   console.log(arr[i]);
// }

// console.log("-----------------------------");

// str = "";
// arr = [];

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     arr.push(`${i + 1}${j + 1}`);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if ((i + 1) % 3 === 0) {
//     str = str + arr[i] + "\n";
//   } else {
//     str = str + arr[i] + " ";
//   }
// }

// console.log(str);
// console.log("-----------------------------");

// Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.

// С помощью двух вложенных циклов выведите на экран следующую строку:[
// [1, 2, 3],
// [4, 5, 6]        ]

// Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.

// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]

console.log("Task 4");
console.log("-----------------------------");

let arr = createArray(10);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2) {
    console.log(arr[i] ** 2);
  } else if (arr[i] % 3 === 0) {
    console.log(arr[i] ** 3);
  }
}

console.log("-----------------------------");

arr = [
  [1, 2, 3],
  [4, 5, 6],
];
let str = "[\n";
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 0) {
      str = str + "\t[" + arr[j][j] + ", ";
    } else if (j === 2 && i !== 1) {
      str = str + arr[i][j] + "]\n";
    } else if (j == 2 && i === 1) {
      str = str + arr[i][j] + "]\t]";
    } else {
      str = str + arr[i][j] + ", ";
    }
  }
}

console.log(str);

console.log("-----------------------------");

arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];

let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    count++;
  }
}

console.log(count);

console.log("-----------------------------");

arr = [1, 2, 3, 4, 5];

count = arr.splice(1, 2);

console.log(arr);
