"use strict";

const person = {
  name: "",
  age: 0,
  gender: "",

  introduce: function () {
    console.log(
      `My name is ${this.name}. I'm ${this.age} years old and i identify as ${this.gender}`
    );
  },

  changeName: function (name) {
    this.name = name;
  },
};

const animal = {
  name: "",

  eat: function () {
    console.log(`${this.name} is eating.`);
  },
};

const dog = {
  name: "",

  bark: function () {
    console.log(`${this.name}: Bark!`);
  },
};

const calculator = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },
};

class Person {
  constructor(name, age, gender) {
    if (
      typeof name === "string" &&
      typeof gender === "string" &&
      typeof age === "number" &&
      name.length > 1 &&
      name.length < 24 &&
      age > 0 &&
      age < 120 &&
      (gender === "male" || gender === "female")
    ) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    } else {
      throw new Error("Invalid argument!");
    }
  }

  introduce() {
    console.log(
      `My name is ${this.name}. I'm ${this.age} years old and i identify as ${this.gender}`
    );
  }

  changeName(name) {
    this.name = name;
  }
}

class BankAccount {
  static bankName = 'АО "МММ"';
  _balance = 0;
  _accountNumber = 0;

  constructor(accountNumber, balance) {
    if (typeof accountNumber === "string" && typeof balance === "number") {
      this._accountNumber = accountNumber;
      this._balance = balance;
    } else {
      throw new Error("Invalid argument!");
    }
  }

  get balance() {
    return this._balance;
  }

  get accountNumber() {
    return this._accountNumber;
  }

  deposit(amount) {
    this._balance += amount;
    console.log(`Deposited ${amount} into account ${this._accountNumber}. New balance: ${this._balance}
`);
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log(`Insufficient funds in account ${this._accountNumber}`);
    } else {
      this._balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this._accountNumber}. New balance: ${this._balance}
`);
    }
  }
}

const sumDigits = (num) => {
  if (num < 10) {
    return num;
  }

  return (num % 10) + sumDigits(Math.floor(num / 10));
};

person.name = "John";
person.age = 25;
person.gender = "male";
person.introduce();
person.changeName("Mike");
person.introduce();

dog.name = "Rex";
dog.eat = animal.eat;
dog.bark();
dog.eat();

console.log(calculator.add.call(null, 5, 3));
console.log(calculator.subtract.apply(null, [5, 3]));
console.log(calculator.multiply.call(null, 5, 3));

const person2 = new Person("Jack", 30, "male");
person2.introduce();

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1500);

console.log(sumDigits(123));
console.log(sumDigits(456789));
