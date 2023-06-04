"use strict";

//Task 1

class Employee {
  constructor(name) {
    if (typeof name === "string" && name.length > 1) {
      this._name = name;
    } else {
      throw new Error("Invalid argument!");
    }
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);

    if (typeof department === "string" && department.length > 1) {
      this.department = department;
    } else {
      throw new Error("Invalid argument!");
    }
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Department: ${this.department}`);
  }
}

//Task 2

class Product {
  constructor(name, price) {
    if (
      typeof name === "string" &&
      typeof price === "number" &&
      name.length > 1 &&
      price > 0
    ) {
      this.name = name;
      this.price = price;
    } else {
      throw new Error("Invalid argument!");
    }
  }
}

class Order {
  _products = [];
  addProduct;
  removeProduct;

  constructor(orderNumber) {
    if (typeof orderNumber === "number" && orderNumber > 0) {
      this.orderNumber = orderNumber;
      this.addProduct = this._polymorph1(this._addProduct1, this._addProduct2);
      this.removeProduct = this._polymorph2(
        { type: "Product" },
        this._removeProduct1,
        { type: "String" },
        this._removeProduct2
      );
    } else {
      throw new Error("Invalid argument!");
    }
  }

  _polymorph1() {
    let len2func = [];

    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === "function") {
        len2func[arguments[i].length] = arguments[i];
      }
    }

    return function () {
      return len2func[arguments.length].apply(this, arguments);
    };
  }

  _polymorph2() {
    let funcArr = [];
    let constructorNameArr = [];

    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === "function") {
        funcArr.push(arguments[i]);
      } else if (typeof arguments[i] === "object") {
        constructorNameArr.push(arguments[i]);
      } else {
        throw new Error("Invalid argument!");
      }
    }

    return function () {
      let index;

      for (let i = 0; i < constructorNameArr.length; i++) {
        if (constructorNameArr[i].type === arguments[0].constructor.name) {
          index = i;
          break;
        }
      }

      return funcArr[index].call(this, arguments[0]);
    };
  }

  _addProduct1(product) {
    if (
      product.constructor.name === "Product" &&
      product.price > 0 &&
      typeof product.name === "string" &&
      product.name.length > 1
    ) {
      this._products.push(product);
    } else {
      throw new Error("Invalid argument!");
    }
  }

  _addProduct2(productName, productPrice) {
    if (
      productPrice > 0 &&
      typeof productName === "string" &&
      productName.length > 1
    ) {
      this._products.push(new Product(productName, productPrice));
    } else {
      throw new Error("Invalid argument!");
    }
  }

  getTotalPrice() {
    let result = 0;
    this._products.forEach((item) => (result += item.price));
    return result;
  }

  _removeProduct1(product) {
    if (
      product.constructor.name === "Product" &&
      product.price > 0 &&
      typeof product.name === "string" &&
      product.name.length > 1
    ) {
      let index = this._products.indexOf(product);
      this._products.splice(index, 1);
    } else {
      throw new Error("Invalid argument!");
    }
  }

  _removeProduct2(productName) {
    if (typeof productName === "string" && productName.length > 1) {
      let product = this._products.find((x) => x.name === productName);
      let index = this._products.indexOf(product);
      this._products.splice(index, 1);
    } else {
      throw new Error("Invalid argument!");
    }
  }
}
