"use strict";

// task 1.a
// Определение текущего размера окна браузера:
// Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении.

function windowSize() {
    return {
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        screenAvalibleWidth: window.screen.availWidth,
        screenAvalibleHeight: window.screen.availHeight,
        windowOuterWidth: window.outerWidth,
        windowOuterHeight: window.outerHeight,
        windowInnerWidth: window.innerWidth,
        windowInnerHeight: window.innerHeight,
        documentInnerWidth: document.documentElement.clientWidth,
        documentInnerHeight: document.documentElement.clientWidth,
        pageWidth: document.documentElement.scrollWidth,
        pageHeight: document.documentElement.scrollHeight,
    };
}

window.addEventListener("resize", () => {
    console.log(windowSize());
});

// task 1.b
// Подтверждение закрытия страницы:
// Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя, уверен ли он в своем решении закрыть страницу.

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
});

// task 1.c
// Управление историей переходов:
// Используйте объект history для управления историей переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории.

const nextBtn = document.createElement("button");
const prevBtn = nextBtn.cloneNode(true);

nextBtn.textContent = "Next";
prevBtn.textContent = "Previous";

nextBtn.addEventListener("click", () => {
    history.forward();
});

prevBtn.addEventListener("click", () => {
    history.back();
});

const scriptEl = document.querySelector("script");

scriptEl.before(prevBtn);
scriptEl.before(nextBtn);

console.log(nextBtn);
console.log(prevBtn);
