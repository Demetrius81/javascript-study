"use strict";

// Давайте создадим класс для управления банковским счетом. В этом классе будет приватное свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
// Класс должен содержать приватное свойство #balance, которое инициализируется значением 0 и представляет собой текущий баланс счета.
// Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
// Реализуйте метод deposit(amount), который позволит вносить средства на счет. Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте ошибку.
// Реализуйте метод withdraw(amount), который позволит снимать средства со счета. Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в противном случае выбрасывайте ошибку.
// Реализуйте конструктор, который принимает начальный баланс в качестве аргумента. Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте ошибку.

class BankAccount {
    // Приватное свойство для хранения баланса
    #balance;

    // Геттер для получения текущего баланса
    get balance() {
        return this.#balance;
    }

    // constructor(initialBalance) Конструктор для инициализации начального баланса
    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error("Balance can not be negative");
        } else {
            this.#balance = initialBalance;
        }
    }

    // Метод для внесения денег на счет
    deposit(amount) {
        if (amount === null) {
            throw new Error("Argument is null");
        } else if (!(amount.constructor.name === "Number")) {
            throw new Error("Amount is not a Number");
        } else if (amount < 0) {
            throw new Error("Can not deposit negative amount");
        } else {
            this.#balance += amount;
        }
    }

    // withdraw(amount) Метод для снятия денег со счета
    withdraw(amount) {
        if (amount === null) {
            throw new Error("Argument is null");
        } else if (!(amount.constructor.name === "Number")) {
            throw new Error("Amount is not a Number");
        } else if (amount < 0) {
            throw new Error("Can not withdraw negative amount");
        } else if (amount > this.#balance) {
            throw new Error("Amount greater than current balance");
        } else {
            this.#balance -= amount;
        }
    }
}

// Создаем новый банковский счет с начальным балансом 500
let account = new BankAccount(500);
console.log(account.balance); // Выводит: 500

account.deposit(50.2);
console.log(account.balance); // Выводит: 700

account.withdraw(100);
console.log(account.balance); // Выводит: 600
