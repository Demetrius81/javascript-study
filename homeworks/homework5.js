"use strict";

function startEnd(n = 0) {
  if (n !== 0) {
    console.log(`Task ${n}`);
  }
  console.log("--------------------------------\n\n");
}

// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

// const numbers = {
// keyin1: 1,
// keyin2: 2,
// keyin3: 3,
// keyin4: 4,
// keyin5: 5,
// keyin6: 6,
// keyin7: 7,
// }

startEnd(1);

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};

for (const key in numbers) {
  if (numbers[key] >= 3) {
    console.log(numbers[key]);
  }
}

startEnd();

// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

// const post = {
// author: "John", // вывести этот текст
// postId: 23,
// comments: [
// {
// userId: 10,
// userName: "Alex",
// text: "lorem ipsum",
// rating: {
// likes: 10,
// dislikes: 2, // вывести это число
// },
// },
// {
// userId: 5, // вывести это число
// userName: "Jane",
// text: "lorem ipsum 2", // вывести этот текст
// rating: {
// likes: 3,
// dislikes: 1,
// },
// },
// ],
// };

startEnd(2);

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

startEnd();

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

// const products = [
// {
// id: 3,
// price: 200,
// },
// {
// id: 4,
// price: 900,
// },
// {
// id: 1,
// price: 1000,
// },
// ];

startEnd(3);

let products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products.forEach((elem) => (elem.price *= 0.85));

console.log(products);

startEnd();

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

// ```
// const products = [
// {
// id: 3,
// price: 127,
// photos: [
// "1.jpg",
// "2.jpg",
// ],
// },
// {
// id: 5,
// price: 499,
// photos: [],
// },
// {
// id: 10,
// price: 26,
// photos: [
// "3.jpg",
// ],
// },
// {
// id: 8,
// price: 78,
// },
// ];

// []()
// []()

products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

startEnd("4.1");

console.log(
  products
    .filter((item) => item.photos !== undefined)
    .filter((item) => item.photos[0] != undefined)
);

startEnd();

startEnd("4.2");

products.sort((a, b) => a.price - b.price);

console.log(products);

startEnd();

// **Задание 5**
// Дано 2 массива
// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// ```
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

startEnd("5*");

class UserException {
  constructor(message) {
    this.message = message;
    this.name = "Исключение, определённое пользователем";
  }
}

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

const dictionary = {};

if (en.length === ru.length) {
  for (let i = 0; i < en.length; i++) {
    dictionary[en[i]] = ru[i];
  }
} else {
  throw new UserException("Массивы для словаря разной длины.");
}

console.log(dictionary);

// 2 вариант с использованием класса и созданием объекта класса

class Dict {
  constructor(arr1, arr2) {
    this.addArraysInDictionary(arr1, arr2);
  }

  addArraysInDictionary(arrA, arrB) {
    if (arrA.length === arrB.length) {
      for (let i = 0; i < arrA.length; i++) {
        this[arrA[i]] = arrB[i];
      }
    } else {
      throw new UserException("Массивы для словаря разной длины.");
    }
  }
}

const dictionary2 = new Dict(en, ru);

console.log(dictionary2);

// 3 вариант с использованием старого синтаксиса ES5

function Dictionary(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      this[arr1[i]] = arr2[i];
    }
  } else {
    throw new UserException("Массивы для словаря разной длины.");
  }
}

Dictionary.prototype.addArraysInDictionary = function (arrA, arrB) {
  if (arrA.length === arrB.length) {
    for (let i = 0; i < arrA.length; i++) {
      this[arrA[i]] = arrB[i];
    }
  } else {
    throw new UserException("Массивы для словаря разной длины.");
  }
};

const dictionary3 = new Dictionary(en, ru);

console.log(dictionary3);

startEnd();
