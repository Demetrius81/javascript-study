"use strict";

//test data
const storageName = "productStorage";

if (!localStorage.getItem(storageName)) {
    let products = new Map();
    products.set("Яблоки", ["Очень сочные", "Сладкие и вкусные"]);
    products.set("Плюшевый чебурашка", [
        "Мягкий и пушистый",
        "Детям понравился",
    ]);
    saveMapToLocalStorage(products, storageName);
}

const headerEl = document.querySelector(".header");
headerEl.insertAdjacentHTML(
    "afterend",
    `<div class="box">
            <label class="box_text">
                <input 
                class="box_product 
                box_input-text" 
                type="text" 
                name="product" 
                required 
                minlength="2" 
                maxlength="100">
                Название продукта
            </label>
            <label class="box_text">
                <textarea
                    class="box_review box_input-text"
                    name="review"
                    id="review"
                    cols="50"
                    rows="10"
                    required
                    minlength="50"
                    maxlength="500"
                ></textarea>
                Отзыв
            </label>
            <div class="box_error"></div>
            <button class="box_btn add">Добавить отзыв</button>
        </div>`
);

function saveMapToLocalStorage(mapCollection, storageName) {
    let arr = Array.from(mapCollection.keys());
    let text = JSON.stringify(arr);
    localStorage.setItem(storageName, text);
    for (const key of mapCollection.keys()) {
        arr = mapCollection.get(key);
        text = JSON.stringify(arr);
        localStorage.setItem(key, text);
    }
}

function loadMapFromLocalStorage(storageName) {
    let result = new Map();
    let arrKeys = JSON.parse(localStorage.getItem(storageName));
    arrKeys.forEach((x) => {
        let arrValues = JSON.parse(localStorage.getItem(x));
        result.set(x, arrValues);
    });
    return result;
}

function ValidateText(text, minlength, maxlength) {
    let istrue =
        text === "" || text.lednth < minlength || text.lednth > maxlength;
    return !istrue;
}

const btnEl = document.querySelector(".box_btn");

btnEl.addEventListener("click", () => {
    let divEl = btnEl.closest("div");
    let input = divEl.querySelector(".box_product");
    let textarea = divEl.querySelector(".box_review");
    let error = divEl.querySelector(".box_error");

    let product = input.value.trim();
    let review = textarea.value.trim();
    let reviewsMap;

    error.textContent = "";

    if (ValidateText(product, 2, 100) && ValidateText(review, 2, 500)) {
        if (localStorage.getItem(storageName).length > 0) {
            reviewsMap = loadMapFromLocalStorage(storageName);
            let reviewsArr = reviewsMap.get(product) ?? [];
            reviewsArr.push(review);
            reviewsMap.set(product, reviewsArr);
        } else {
            reviewsMap = new Map();
            reviewsMap.set(product, [review]);
        }
        input.value = "";
        textarea.value = "";
        saveMapToLocalStorage(reviewsMap, storageName);
    } else {
        error.textContent = "В поля ввода введен некорректный текст";
    }
});
