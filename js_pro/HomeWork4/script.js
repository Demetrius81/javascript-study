"use strict";

let practices = [
    {
        title: "TRX",
        timeSpending: "Понедельник 09:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Интервальная тренировка",
        timeSpending: "Понедельник 11:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "TRX",
        timeSpending: "Понедельник 17:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Интервальная тренировка",
        timeSpending: "Понедельник 19:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Пилатес",
        timeSpending: "Вторник 09:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Функциональная тренировка",
        timeSpending: "Вторник 11:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Пилатес",
        timeSpending: "Вторник 17:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Функциональная тренировка",
        timeSpending: "Вторник 19:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Йога",
        timeSpending: "Среда 09:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Табата",
        timeSpending: "Среда 11:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Йога",
        timeSpending: "Среда 17:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Табата",
        timeSpending: "Среда 19:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "TRX",
        timeSpending: "Четверг 09:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Интервальная тренировка",
        timeSpending: "Четверг 11:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "TRX",
        timeSpending: "Четверг 17:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Интервальная тренировка",
        timeSpending: "Четверг 19:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Пилатес",
        timeSpending: "Пятница 09:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Функциональная тренировка",
        timeSpending: "Пятница 11:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Пилатес",
        timeSpending: "Пятница 17:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Функциональная тренировка",
        timeSpending: "Пятница 19:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Йога",
        timeSpending: "Суббота 09:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Табата",
        timeSpending: "Суббота 11:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Йога",
        timeSpending: "Суббота 17:00",
        quantity: 0,
        totalQuantity: 10,
    },
    {
        title: "Табата",
        timeSpending: "Суббота 19:00",
        quantity: 0,
        totalQuantity: 10,
    },
];

function addScheduleItem(whereToInsertEl, itemObj) {
    const practiceEl = document.createElement("div");
    practiceEl.classList.add("practice");

    const nameEl = document.createElement("div");
    nameEl.classList.add("practice_name");
    nameEl.textContent = itemObj.title;

    const timeEl = document.createElement("div");
    timeEl.classList.add("practice_time");
    timeEl.textContent = itemObj.timeSpending;

    const currentEl = document.createElement("div");
    currentEl.classList.add("practice_current");
    currentEl.textContent = itemObj.quantity;

    const slashEl = document.createElement("div");
    slashEl.classList.add("practice_slash");
    slashEl.textContent = "/";

    const maxEl = document.createElement("div");
    maxEl.classList.add("practice_max");
    maxEl.textContent = itemObj.totalQuantity;

    const buttonBoxEl = document.createElement("div");
    buttonBoxEl.classList.add("practice_buttons");

    const successBtnEl = document.createElement("button");
    successBtnEl.classList.add("btn");
    successBtnEl.classList.add("btn-success");
    successBtnEl.textContent = "Записаться";

    const dangerBtnEl = document.createElement("button");
    dangerBtnEl.classList.add("btn");
    dangerBtnEl.classList.add("btn-danger");
    dangerBtnEl.textContent = "Отменить запись";
    dangerBtnEl.disabled = true;

    buttonBoxEl.append(successBtnEl);
    buttonBoxEl.append(dangerBtnEl);

    practiceEl.append(nameEl);
    practiceEl.append(timeEl);
    practiceEl.append(currentEl);
    practiceEl.append(slashEl);
    practiceEl.append(maxEl);
    practiceEl.append(buttonBoxEl);

    whereToInsertEl.append(practiceEl);
}

function updateRecord(el, isIncrement, total) {
    const currentEl = el.querySelector(".practice_current");
    let currentQuantity = +currentEl.textContent;
    if (total > currentQuantity && currentQuantity >= 0) {
        const dangerBtnEl = el.querySelector(".btn-danger");
        let isActive = dangerBtnEl.disabled;
        dangerBtnEl.disabled = !isActive;

        const successBtnEl = el.querySelector(".btn-success");
        isActive = successBtnEl.disabled;
        successBtnEl.disabled = !isActive;

        currentEl.textContent = isIncrement
            ? ++currentQuantity
            : --currentQuantity;
        return currentQuantity;
    }
    return null;
}

function getItemModel(btnEl, practices) {
    const practiceEl = btnEl.closest(".practice");
    let itemModel = null;
    practices.forEach((x) => {
        if (
            x.title ===
                practiceEl.querySelector(".practice_name").textContent &&
            x.timeSpending ==
                practiceEl.querySelector(".practice_time").textContent.trim()
        ) {
            itemModel = x;
        }
    });
    return itemModel;
}

const appEl = document.querySelector(".app");
practices.forEach((x) => addScheduleItem(appEl, x));
const applyBtns = appEl.querySelectorAll(".btn-success");

applyBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let itemModel = getItemModel(btn, practices);
        const currentQuantity = updateRecord(
            btn.closest(".practice"),
            true,
            itemModel.totalQuantity
        );
        if (currentQuantity > 0) {
            itemModel.quantity = currentQuantity;
        }
        console.log(itemModel);
    });
});

const cancelBtns = appEl.querySelectorAll(".btn-danger");

cancelBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let itemModel = getItemModel(btn, practices);
        const currentQuantity = updateRecord(
            btn.closest(".practice"),
            false,
            itemModel.totalQuantity
        );
        itemModel.quantity = currentQuantity;
        console.log(itemModel);
    });
});
