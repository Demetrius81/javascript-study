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

// console.log("Task 4");
// console.log("-----------------------------");

// let arr = createArray(10);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2) {
//     console.log(arr[i] ** 2);
//   } else if (arr[i] % 3 === 0) {
//     console.log(arr[i] ** 3);
//   }
// }

// console.log("-----------------------------");

// arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// let str = "[\n";
// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (j === 0) {
//       str = str + "\t[" + arr[j][j] + ", ";
//     } else if (j === 2 && i !== 1) {
//       str = str + arr[i][j] + "]\n";
//     } else if (j == 2 && i === 1) {
//       str = str + arr[i][j] + "]\t]";
//     } else {
//       str = str + arr[i][j] + ", ";
//     }
//   }
// }

// console.log(str);

// console.log("-----------------------------");

// arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 3) {
//     count++;
//   }
// }

// console.log(count);

// console.log("-----------------------------");

// arr = [1, 2, 3, 4, 5];

// count = arr.splice(1, 2);

// console.log(arr);

function startEnd(n = 0) {
  if (n !== 0) {
    console.log(`Task ${n}`);
  }
  console.log("--------------------------------\n\n");
}

// startEnd(1);

// const daysOfWeek = {
//   1: 'Понедельник',
//   2: 'Вторник',
//   3: 'Среда',
//   4: 'Четвегр',
//   5: 'Пятница',
//   6: 'Суббота',
//   7: 'Воскресенье',
// };

// console.log(daysOfWeek[2]);

// startEnd();
// startEnd(2);

// const user = {
//   name: 'John',
//   surname: 'Doe',
//   age: 18,
// };

// console.log(`${user.name} - ${user.surname} - ${user.age}`);

// startEnd(2);

// // Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// // const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// // const arr2 = [1, 2, 3, 4, 5, 6, 7];
// // С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера (или наоборот)

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const daysOfWeek = {};

// if (arr1.length === arr2.length) {
//   for (let i = 0; i < arr1.length; i++) {
//     daysOfWeek[arr1[i]] = arr2[i];
//   }
// }
// console.log(daysOfWeek);

// startEnd();

// // const obj = {x: 1, y: 2, z: 3};
// // Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

// const obj = { x: 1, y: 2, z: 3 };

// for (const key in obj) {
//   obj[key] = obj[key] ** 2;
// }

// console.log(obj);

// startEnd();

// // * Создать объект товара
// // id
// // название
// // описание
// // цена (вывести в консоль, товар с 20% скидкой)

// const product = {
//   id: 1,
//   name: 'Some Product',
//   description: 'Description of some product',
//   price: 10000,
//   printProduct: function () {
//     this.price *= 0.8;
//     console.log(this);

//   }
// }

// product.printProduct(3);

// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// }

// let result = 0;

// const arrObj = Object.values(obj);

// for (let i = 0; i < arrObj.length; i++) {
//   let intObj = Object.values(arrObj[i]);
//   for (const key in intObj) {
//     result = result + intObj[key];
//   }
// }

// console.log(result);

// result = Object.values(obj);
// result = result.flatMap(Object.values);
// result = result.reduce((accum, current) => accum + current, 0);

// console.log(result);

// const triangle = {
//   sideA: 5,
//   sideB: 6,
//   getSqare: () => {
//     if (this.sideA === this.sideB) {
// console.log('error');
//     } else {
//       if ((sideA * 2) < sideB || (sideB * 2) < sideA) {
//         console.log('error');
//       }else{

//       }

//     }
//   }
// }

// Создайте объект riddles
// Добавьте свойства question, answer
// создайте метод askQuestion который задает вопрос question и сравнивает ответ с answer
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”
// * По желанию, создать 2 подсказки, если пользователь ответил неверно

// const riddles = {
//   question: "Зимой и летом одним цветом.",
//   answer: ["елка"],
//   clues: ["Растет в лесу", "Хвойное дерево"],
//   askQuestion: function () {
//     for (let i = -1; i < this.clues.length; i++) {
//       let userAnswer = prompt(
//         i < 0 ? this.question : this.question + this.clues[i]
//       );
//       if (userAnswer === this.answer) {
//         alert("Молодец, угадал!");
//       } else {
//         alert(
//           i < temp.length - 1
//             ? "Не угадал. Попробуй еще."
//             : "Не угадал. Игра окончена."
//         );
//         continue;
//       }
//     }
//   },
// };

// console.log(riddles);

// riddles.test();

// riddles.askQuestion();

// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// Получите ссылку на первый абзац с классом www. и вывести его в консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p>

const pEl1 = document.querySelector("#block p:first-child");

console.log(pEl1);

const pEl2 = document.querySelector(".www:first-of-type");

console.log(pEl2);

// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/
// Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

const linkAEl = document.querySelector(".link");
linkAEl.textContent = "link text js";
linkAEl.setAttribute("href", "https://developer.mozilla.org/ru");
linkAEl.setAttribute("target", "blank");
linkAEl.insertAdjacentHTML("afterend", "<br>");

console.log(linkAEl);

const photoImgEl = document.querySelector(".photo");
photoImgEl.setAttribute("src", "img/test.jpg");

console.log(photoImgEl);

// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

const contentDivEl = document.querySelector(".content");
const newPEl = document.createElement("p");
newPEl.textContent = "Новый текстовый элемент";
const headerH2El = document.createElement("h2");
headerH2El.textContent = "Test Text Header";
contentDivEl.appendChild(newPEl);
contentDivEl.appendChild(headerH2El);

console.log(contentDivEl);

console.log(contentDivEl);

let count = 0;

const buttonCounterEl = document.createElement("button");
buttonCounterEl.addEventListener("click", counter);
buttonCounterEl.textContent = `Меня кликнули ${count} раз`;

const buttonResetEl = document.createElement("button");
buttonResetEl.addEventListener("click", reset);
buttonResetEl.textContent = `Сбросить`;

contentDivEl.appendChild(buttonCounterEl);
contentDivEl.appendChild(buttonResetEl);

function reset() {
  count = 0;
  buttonCounterEl.textContent = `Меня кликнули ${count} раз`;
  headerH2El.textContent = `${count} кликов`;
}

function counter() {
  count++;
  buttonCounterEl.textContent = `Меня кликнули ${count} раз`;
  headerH2El.textContent = `${count} кликов`;
}

buttonResetEl.insertAdjacentHTML("afterend", "<br>");

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
// Создать вторую кнопку, при клике на которую должен появляться параграф с произвольным текстом.
// При нажатии на вторую кнопку еще раз, текст должен пропадать.

const buttonSendEl = document.createElement("button");
buttonSendEl.addEventListener("click", send);
buttonSendEl.textContent = `Отправить`;

const buttonTextEl = document.createElement("button");
buttonTextEl.addEventListener("click", textGenerate);
buttonTextEl.textContent = `Генерировать текст`;

function textGenerate() {
  if (textPEl.textContent !== "") {
    textPEl.textContent = "";
  } else {
    textPEl.textContent = `Some text`;
  }
}

function send() {
  buttonSendEl.textContent = `Текст отправлен`;
}

const textPEl = document.createElement("p");

contentDivEl.appendChild(buttonSendEl);
linkAEl.insertAdjacentHTML("afterend", "<br>");
contentDivEl.appendChild(buttonTextEl);
linkAEl.insertAdjacentHTML("afterend", "<br>");
contentDivEl.appendChild(textPEl);
