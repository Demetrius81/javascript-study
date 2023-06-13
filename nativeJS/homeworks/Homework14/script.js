"use strict";

class Book {
  constructor(title, author, pages) {
    if (
      typeof title === "string" &&
      typeof author === "string" &&
      typeof pages === "number" &&
      title.length > 0 &&
      author.length > 0 &&
      pages > 0
    ) {
      this._title = title;
      this._author = author;
      this._pages = pages;
    } else {
      throw new Error("Invalid argument!");
    }
  }

  displayInfo() {
    console.log(this.toString());
  }

  toString() {
    return `Title: ${this._title}\nAuthor: ${this._author}\nCount pages: ${this._pages}`;
  }
}

class Student {
  constructor(name, age, grade) {
    if (
      typeof name === "string" &&
      typeof age === "number" &&
      typeof grade === "string" &&
      name.length > 1 &&
      age > 14 &&
      age < 120 &&
      grade.length > 0
    ) {
      this._name = name;
      this._age = age;
      this._grage = grade;
    } else {
      throw new Error("Invalid argument!");
    }
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (typeof value === "number" && value > 14 && value < 120) {
      this._age = value;
    } else {
      throw new Error("Invalid argument!");
    }
  }

  get grade() {
    return this._grage;
  }

  set grade(value) {
    if (typeof value === "string" && value.length > 0) {
      this._grage = value;
    } else {
      throw new Error("Invalid argument!");
    }
  }

  displayInfo() {
    console.log(this.toString());
  }

  toString() {
    return `Name: ${this._name}\nAge: ${this._age}\nGrade: ${this._grage}`;
  }
}
