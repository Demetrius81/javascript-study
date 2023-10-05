"use strict";

// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const rewiews = [];

function addElement(baseEl, productObj) {
    const boxEl = document.createElement("div");
    boxEl.classList.add("app_box");

    const pEl = document.createElement("p");
    pEl.classList.add("app_box__text");
    pEl.textContent = productObj.product;

    const textareaEl = document.createElement("textarea");
    textareaEl.classList.add("app_box__input");
    textareaEl.cols = 50;
    textareaEl.rows = 10;
    textareaEl.maxLength = 500;
    textareaEl.placeholder = "Tnter the comment";

    const btnEl = document.createElement("button");
    btnEl.classList.add("app_box__btn");
    btnEl.textContent = "Send comment";

    const divEl = document.createElement("div");
    divEl.classList.add("app_box_content-box");

    boxEl.append(pEl);
    boxEl.append(textareaEl);
    boxEl.append(btnEl);
    boxEl.append(divEl);

    baseEl.append(boxEl);

    printRewiews(divEl, productObj.reviews);

    btnEl.addEventListener("click", () => {
        divEl.innerHTML = "";
        try {
            const userText = textareaEl.value;
            if (userText.trim() === "") {
                printError(divEl, "The field is empty");
                printRewiews(divEl, productObj.reviews);
                throw new Error("The field is empty");
            } else if (userText.length < 50 || userText.length > 500) {
                printError(
                    divEl,
                    "Text content must be from 50 to 500 symbols!"
                );
                printRewiews(divEl, productObj.reviews);
                throw new Error("Text content is too short or too long");
            } else {
                productObj.reviews.push({
                    id: `${+productObj.reviews.at(-1) + 1}`,
                    text: userText,
                });
                printRewiews(divEl, productObj.reviews);
                textareaEl.value = "";
            }
        } catch (error) {
            console.log(error);
        }
    });
}

const printRewiews = (el, reviews) => {
    reviews.forEach((x) => {
        const contentEl = document.createElement("div");
        contentEl.classList.add("app_box_content-box__content");
        contentEl.textContent = x.text;
        el.append(contentEl);
    });
};

const printError = (el, message) => {
    const errEl = document.createElement("div");
    errEl.classList.add("app_box_content-box__error");
    errEl.textContent = message;
    el.prepend(errEl);
};

const appEl = document.querySelector(".app");
initialData.forEach((x) => rewiews.push(x));
rewiews.forEach((x) => addElement(appEl, x));
