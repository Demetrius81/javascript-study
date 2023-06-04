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
