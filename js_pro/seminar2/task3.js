"use strict";

// Вы создаете интерфейс, где пользователь вводит число.
// Ваша задача — проверить, является ли введенное значение числом или нет, и дать соответствующий ответ.

// Создайте HTML-структуру: текстовое поле для ввода числа и кнопку "Проверить".
// Добавьте место (например, div) для вывода сообщения пользователю.
// Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция должна использовать try и catch для проверки вводимого значения.

const appEl = document.querySelector(".app");

const boxDivEl = document.createElement("div");
boxDivEl.classList.add("box");

const inputEl = document.createElement("input");
inputEl.classList.add("box__input");

const btnEl = document.createElement("button");
btnEl.classList.add("box__btn");
btnEl.textContent = "Check";

const divEl = document.createElement("div");
divEl.classList.add("box__div");

boxDivEl.append(inputEl);
boxDivEl.append(btnEl);
boxDivEl.append(divEl);

appEl.prepend(boxDivEl);

btnEl.addEventListener("click", () => {
    try {
        const userin = inputEl.value;
        if (isNaN(userin) || userin.trim() === "") {
            divEl.textContent = "Error!";
            throw new Error("this is not a number");
        } else {
            divEl.textContent = "Ok!";
        }
    } catch (error) {
        console.log(error);
    }
});
