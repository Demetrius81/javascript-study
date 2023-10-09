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

function ValidateText(text, minlength, maxlength) {
    let istrue =
        text === "" || text.lednth < minlength || text.lednth > maxlength;
    return !istrue;
}

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

function updateLocalStorage(mapCollection, storageName) {
    let arr = Array.from(mapCollection.keys());
    let text = JSON.stringify(arr);
    localStorage.removeItem(storageName);
    localStorage.setItem(storageName, text);
    for (const key of mapCollection.keys()) {
        arr = mapCollection.get(key);
        text = JSON.stringify(arr);
        localStorage.removeItem(key);
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

function createBlock(elementToInsert, productText, commentArr) {
    const boxEl = document.createElement("div");
    boxEl.classList.add("box");
    boxEl.classList.add("productbox");

    const commentBox = document.createElement("div");
    commentBox.classList.add("box_content");
    commentBox.classList.add("off");
    commentBox.style = "display: none;";
    commentArr.forEach((text) => {
        createComment(commentBox, text);
    });

    boxEl.append(commentBox);
    boxEl.insertAdjacentHTML(
        "afterbegin",
        `<a href="#" class="box_text">
            ${productText}
        </a>`
    );

    elementToInsert.append(boxEl);
}

function createComment(elementToInsert, commentText) {
    elementToInsert.insertAdjacentHTML(
        "beforeend",
        `<div class="box_review">
            <div class="box_content__review">
                ${commentText}
            </div>
            <button class="box_content__btn remove">Удалить</button>
        </div>`
    );
}

const appEl = document.querySelector(".app");

let productsMap = loadMapFromLocalStorage(storageName);
let productsArr = Array.from(productsMap.keys());

productsArr.forEach((product) => {
    createBlock(appEl, product, productsMap.get(product));
});

const produttEls = document.querySelectorAll(".box_text");

produttEls.forEach((btn) => {
    btn.addEventListener("click", () => {
        const boxEl = btn.closest(".box");
        const commentEl = boxEl.querySelector(".box_content");
        const allCommentEls = document.querySelectorAll(".box_content");
        allCommentEls.forEach((x) => {
            if (x != commentEl) {
                x.style.display = "none";
            }
        });
        commentEl.style.display = commentEl.classList.contains("off")
            ? "block"
            : "none";
        commentEl.classList.toggle("off");
    });
});

const btnEls = document.querySelectorAll(".box_content__btn");

btnEls.forEach((btn) => {
    btn.addEventListener("click", () => {
        let reviewBox = btn.closest(".box_review");
        let textComment = reviewBox
            .querySelector(".box_content__review")
            .textContent.trim();
        let productBox = btn.closest(".box");
        let textProduct = productBox
            .querySelector(".box_text")
            .textContent.trim();
        let commentArr = productsMap.get(textProduct);
        console.log(commentArr);
        if (commentArr.length > 1) {
            commentArr.splice(commentArr.indexOf(textComment), 1);
            productsMap.set(textProduct, commentArr);
            console.log(productsMap);
            reviewBox.remove();
        } else {
            productsMap.delete(textProduct);
            console.log(productsMap);
            productBox.remove();
        }

        updateLocalStorage(productsMap, storageName);
    });
});
