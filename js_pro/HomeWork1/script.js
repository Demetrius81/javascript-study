"use strict";

// Задание 1
// Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.

// Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }
// Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.

// Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате:

// Название альбома - Исполнитель (Год выпуска)

let musicCollection = [
  {
    title: "Come On Over",
    artist: "Shania Twain",
    year: 1997,
  },
  {
    title: "Led Zeppelin IV",
    artist: "Led Zeppelin",
    year: 1971,
  },
  {
    title: "Jagged Little Pill",
    artist: " Alanis Nadine Morissette",
    year: 1995,
  },
  {
    title: "Sgt. Pepper’s Lonely Hearts Club Band",
    artist: "The Beatles",
    year: 1967,
  },
  {
    title: "Dangerous",
    artist: "Michael Jackson",
    year: 1991,
  },
  {
    title: "The Wall",
    artist: "Pink Floyd",
    year: 1979,
  },
  {
    title: "Metallica",
    artist: "Metallica",
    year: 1991,
  },
  {
    title: "High Voltage",
    artist: "AC/DC",
    year: 1976,
  },
];

musicCollection[Symbol.iterator] = function () {
  return {
    current: 0,
    to: this.length,
    next() {
      return this.current < this.to
        ? {
            done: false,
            value: musicCollection[this.current++],
          }
        : {
            done: true,
          };
    },
  };
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// Отслеживать, какой повар готовит какое блюдо.
// Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

let chefAndFood = new Map();

chefAndFood
  .set("Виктор", "Пицца")
  .set("Ольга", "Суши")
  .set("Дмитрий", "Десерты");

let dishesAndTheirChefs = new Map();

dishesAndTheirChefs
  .set(`Пицца "Маргарита"`, `Виктор`)
  .set(`Пицца "Пепперони"`, `Виктор`)
  .set(`Суши "Филадельфия"`, `Ольга`)
  .set(`Суши "Калифорния"`, `Ольга`)
  .set(`Тирамису`, `Дмитрий`)
  .set(`Чизкейк`, `Дмитрий`);

//>>>>>>>>>>> Вариант 1 >>>>>>>>>>>

class Client {
  constructor(name) {
    this.id = Symbol(name);
    this.name = name;
    this.order = new Set();
  }
  addFood(food) {
    this.order.add(food);
    return this;
  }
  getOrder() {
    return this.order;
  }
  displayInfoV1(dishesAndTheirChefsMap, chefAndFoodMap) {
    console.log("Первый вариант:");
    this.getOrder().forEach((dish) => {
      console.log(
        `Клиент: ${
          this.name
        }, блюдо: ${dish}, повар: ${dishesAndTheirChefsMap.get(
          dish
        )}, специальность: ${chefAndFoodMap.get(
          dishesAndTheirChefsMap.get(dish)
        )}`
      );
    });
  }
}

let client1 = new Client("Алексей");
let client2 = new Client("Мария");
let client3 = new Client("Ирина");

client1.addFood(`Пицца "Пепперони"`).addFood(`Тирамису`);
client2.addFood(`Суши "Калифорния"`).addFood(`Пицца "Маргарита"`);
client3.addFood(`Чизкейк`);

client2.displayInfoV1(dishesAndTheirChefs, chefAndFood);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>> Вариант 2 >>>>>>>>>>>

let alex = { name: "Алексей" };
let mary = { name: "Мария" };
let ira = { name: "Ирина" };

let clients = new Map();

clients
  .set(alex, new Set([`Пицца "Пепперони"`, `Тирамису`]))
  .set(mary, new Set([`Суши "Калифорния"`, `Пицца "Маргарита"`]))
  .set(ira, new Set([`Чизкейк`]));

const displayInfoV2 = (
  clientsMap,
  dishesAndTheirChefsMap,
  chefAndFoodMap,
  clientObject
) => {
  console.log("Второй вариант");
  clientsMap.get(clientObject).forEach((dish) => {
    console.log(
      `Клиент: ${
        clientObject.name
      }, блюдо: ${dish}, повар: ${dishesAndTheirChefsMap.get(
        dish
      )}, специальность: ${chefAndFoodMap.get(
        dishesAndTheirChefsMap.get(dish)
      )}`
    );
  });
};

displayInfoV2(clients, dishesAndTheirChefs, chefAndFood, alex);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Можно выполнить данное задание, а в понедельник должны открыть сдачу дз
