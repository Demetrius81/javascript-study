"use strict";

// //task1

// localStorage.setItem("username", "John Conrod");
// localStorage.setItem("username2", "Phillip Morisson");

// //task2

// let storedUsername = localStorage.getItem("username");
// console.log(`Value from LocalStorage: ${storedUsername}`);

// //task3

// localStorage.removeItem("username2");
// storedUsername = localStorage.getItem("username2");
// console.log(`Value from LocalStorage: ${storedUsername}`);

// //task4

// localStorage.clear();

// console.log(`LocalStorage: `, localStorage);

// //task5

// if (localStorage.getItem("counter")) {
//     let counter = +localStorage.getItem("counter") + 1;
//     localStorage.setItem("counter", counter.toString());
// } else {
//     localStorage.setItem("counter", "1");
// }

// console.log(`Visit counter`, localStorage.getItem("counter"));

// //task6

// localStorage.clear();

let counter = localStorage.getItem("counter")
    ? +localStorage.getItem("counter")
    : 0;

const updateCounter = () => {
    counter++;
    localStorage.setItem("counter", counter.toString());
};

document.querySelector(".counter").textContent = counter;

document.querySelector(".increment").addEventListener("click", () => {
    updateCounter();
    document.querySelector(".counter").textContent = counter;
});
