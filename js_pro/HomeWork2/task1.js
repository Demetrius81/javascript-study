"use strict";

// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

let books = [
    "Идиот",
    "Преступление и наказание",
    "Подросток",
    "Братья Карамазовы",
];

class Library {
    #books = [];

    get allBooks() {
        return this.#books;
    }

    constructor(books) {
        if (books === null) {
            throw new Error("Argument is null");
        }

        if (new Set(books).size !== books.length) {
            throw new Error("Array contains several identical entities");
        }

        if (!(books instanceof Array)) {
            throw new Error("Argument is not array");
        }

        this.#books = books.slice(0, books.length);
    }

    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error("This book already exists");
        }

        this.#books.push(title);
    }

    removeBook(title) {
        if (!this.hasBook(title)) {
            throw new Error("There is no that book");
        }

        this.#books.splice(this.#books.indexOf(title), 1);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

let lib = new Library(books);

try {
    let lib2 = new Library(["Идиот", "Идиот"]);
} catch (error) {
    console.log(error);
}

console.log(lib.allBooks);

try {
    lib.addBook("Идиот");
} catch (error) {
    console.log(error);
}

lib.addBook("Бесы");

console.log(lib.allBooks);

try {
    lib.removeBook("Топор");
} catch (error) {
    console.log(error);
}

lib.removeBook("Бесы");

console.log(lib.allBooks);

console.log(lib.hasBook("Бесы") ? `Есть книга "Бесы"` : `Нет книги "Бесы"`);
console.log(lib.hasBook("Идиот") ? `Есть книга "Идиот"` : `Нет книги "Идиот"`);
