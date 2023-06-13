"use strict";

const getPrototypeChain = (obj) => {
  const prototypeChain = [];
  let current = obj;

  while (true) {
    current = Object.getPrototypeOf(current);
    if (current) {
      prototypeChain.push(current);
    } else {
      break;
    }
  }

  return prototypeChain;
};

function Person(nameArg, ageArg) {
  this.name = nameArg;
  this.age = ageArg;
  this.introduce = function () {
    console.log(`My name is ${this.name}, i am ${this.age} years old.`);
  };
}

function BankAccount(accountNumber, balance) {
  if (typeof accountNumber === "string" && typeof balance === "number") {
    this._accountNumber = accountNumber;
    this._balance = balance;

    this.getBalance = function () {
      return this._balance;
    };

    this.deposit = function (amount) {
      this._balance += amount;
      console.log(
        `Deposited ${amount} into account ${this._accountNumber}. New balance: ${this._balance}`
      );
    };

    this.withdraw = function (amount) {
      if (amount > this._balance) {
        console.log(`Insufficient funds in account ${this._accountNumber}`);
      } else {
        this._balance -= amount;
        console.log(
          `Withdrawn ${amount} from account ${this._accountNumber}. New balance: ${this._balance}`
        );
      }
    };
  } else {
    throw new Error("Invalid argument!");
  }
}

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`Животное издает звук.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`Животное ${this.name} издает звук.`);
  }

  fetch() {
    console.log(`Собака ${this.name} принесла мяч.`);
  }
}

const bodyEl = document.querySelector("body");
console.log(getPrototypeChain(bodyEl));
console.log(bodyEl);

const person1 = new Person("John", 25);
person1.introduce();
console.log(person1);

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1500);

const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.
console.log(dog1);
