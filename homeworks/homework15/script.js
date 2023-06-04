"use strict";

//Task 1

class Employee {
  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Department: ${this.department}`);
  }
}

//Task 2

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  products = [];

  constructor(orderNumber) {
    this.orderNumber = orderNumber;
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    let result = 0;
    this.products.forEach((item) => (result += item.price));
    return result;
  }
}
