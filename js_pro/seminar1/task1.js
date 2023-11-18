"use strict";

// Создать механизм для безопасного добавления метаданных к объектам книг с использованием Symbol.
// Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
// Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных).
// Создать объект книги, добавить метаданные и вывести их на консоль.

// reviewSymbol создать
// ratingSymbol
// tagsSymbol

// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
  // Добавить код
  book[metadataType] = data;
}

// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
  // вернуть
  return book[metadataType];
}

// Создание объекта книги и добавление метаданных
let book = {
  title: "1984",
  author: "George Orwell",
};

const reviewSymbol = Symbol("rewiew");
const ratingSymbol = Symbol("rating");
const tagsSymbol = Symbol("tags");

addMetadata(book, reviewSymbol, "Отличная книга о дистопии!");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "dystopia");

// Вывод метаданных для книги
console.log(getMetadata(book, reviewSymbol)); // ["Отличная книга о дистопии!"]
console.log(getMetadata(book, ratingSymbol)); // [5]
console.log(getMetadata(book, tagsSymbol)); // ["dystopia"]
console.log(book);
