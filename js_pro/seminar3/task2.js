"use strict";

// Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов. Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для своего гарнитура. После того как пользователь собрал свой комплект и сохраняет свой выбор, информация о нем сохраняется в куки. При следующем посещении сайта их индивидуальные настройки автоматически загружаются, и они видят ранее созданный мебельный комплект.

// Создайте базовую HTML-структуру с различными элементами мебели (например, стол, стул, диван) и возможными параметрами для них (цвет, материал, дизайн).

// Пользователи могут выбирать разные элементы и параметры, чтобы составить свой мебельный гарнитур.

// После выбора всех желаемых параметров предоставьте кнопку "Сохранить комплект", которая сохраняет текущий выбор пользователя в куки.

// При следующем посещении сайта автоматически загрузите сохраненные параметры из куки и отобразите ранее созданный комплект.

// Убедитесь, что у пользователей есть возможность очистить сохраненные настройки (очистить куки).

const appEl = document.querySelector(".app");
appEl.insertAdjacentHTML(
    "afterbegin",
    `<h1>Создайте свой мебельный гарнитур</h1>
    <div class="furniture-option">
        <h2 class="table">Стол</h2>
        <label>
            Цвет:
            <select id="table-color">
                <option value="brown">Коричневый</option>
                <option value="white">Белый</option>
                <option value="green">Зеленый</option>
            </select>
        </label>
    </div>
    <div class="furniture-option">
        <h2 class="chair">Стул</h2>
        <label>
            Материал:
            <select id="chair-material">
                <option value="wood">Дерево</option>
                <option value="metal">Металл</option>
                <option value="stone">Камень</option>
            </select>
        </label>
    </div>
    <button id="save-btn">Сохранить комплект</button>
    <button id="load-btn">Загрузить последний комплект</button>
    <button id="clear-btn">Очистить настройки</button>`
);
const tableEl = document.querySelector("#table-color");
const chairEl = document.querySelector("#chair-material");
const saveBtn = document.querySelector("#save-btn");
const loadBtn = document.querySelector("#load-btn");
const clearBtn = document.querySelector("#clear-btn");
const name = "set";

saveBtn.addEventListener("click", () => {
    let data = getDataObj();
    setCookie(name, data, 5);
});

loadBtn.addEventListener("click", () => {
    let data = getCookie(name);
    if (data) {
        setDataToElements(data);
    } else {
        console.log(">>>Cookie is clear. No data to load.");
    }
});

clearBtn.addEventListener("click", () => {
    deleteCookie(name);
});

const getDataObj = () => {
    return {
        table: `${tableEl.value}`,
        chair: `${chairEl.value}`,
    };
};

const setDataToElements = (data) => {
    tableEl.value = data.table;
    chairEl.value = data.chair;
};

const setCookie = (name, obj, days) => {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    let cookieValue =
        encodeURIComponent(JSON.stringify(obj)) +
        "; expires=" +
        expirationDate.toUTCString();
    document.cookie = name + "=" + cookieValue;
};

const getCookie = (name) => {
    let cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split("=");
        if (cookieName === name) {
            return JSON.parse(decodeURIComponent(cookieValue));
        }
    }
    return null;
};

const deleteCookie = (name) => {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
};
