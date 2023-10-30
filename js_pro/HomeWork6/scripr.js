"use strict";

// window.history.pushState({}, "", "index.html");
const urlRandomPhoto =
    "https://api.unsplash.com/photos/random/?client_id=hogzj3kFFFplvMi0uANfWYsCPo1-lqgHj6UulC0KzcU";

const pictureEl = document.createElement("img");
pictureEl.classList.add("slide_picture-box");
pictureEl.classList.add("img");
const pEl = document.querySelector(".picture");
const figcaptureEl = document.querySelector(".slide_picture-description");
const likeEl = document.querySelector(".like-btn");
const prevEl = document.querySelector(".prev-btn");
const nextEl = document.querySelector(".next-btn");
const refreshEl = document.querySelector(".refresh-btn");
let photosHistory = [];

localStorage.setItem("test", JSON.stringify(photosHistory));
console.log(JSON.parse(localStorage.getItem("test")));

let countOfLikes = 0;
let currentPhotoObj = {};
let currentPhotoNum = 0;
prevEl.addEventListener("click", () => {
    localStorage.setItem("currentphotonum".JSON.stringify(--currentPhotoNum));
    location.reload();
});
nextEl.addEventListener("click", () => {
    localStorage.setItem("currentphotonum".JSON.stringify(++currentPhotoNum));
    location.reload();
});

likeEl.addEventListener("click", (e) => setOrRemoveLike(likeEl));

refreshEl.addEventListener("click", () => {
    currentPhotoNum = photosHistory.keys.at(-1);
    location.reload();
});

window.addEventListener("load", () => {
    getDataFromLocalStorage();
    if (currentPhotoNum === photosHistory.at(-1)) {
        getPictureFromServer(urlRandomPhoto);
        currentPhotoNum = photosHistory.keys.at(-1);
    }
    currentPhotoObj = photosHistory[currentPhotoNum];
    console.log("photosHistory", photosHistory);
    console.log("countOfLikes", countOfLikes);
    console.log("currentPhotoObj", currentPhotoObj);
    console.log("currentPhotoNum", currentPhotoNum);
});

window.addEventListener("beforeunload", () => {
    setDataToLocalStorage();
    localStorage.setItem("test", "test");
});

// Ставим или удаляем лайк
function setOrRemoveLike(element) {
    if (element.classList.contains("like")) {
        element.classList.remove("like");
        localStorage.setItem("likes", --countOfLikes);
    } else {
        element.classList.add("like");
        localStorage.setItem("likes", ++countOfLikes);
    }
}

// Получаем новую картинку от сервера и сохраняем данные в модели
async function getPictureFromServer(url) {
    const response = await fetch(url);
    const data = await response.json();
    const urln = new String(data.urls.regular);
    const altn = new String(data.alt_description);
    const authorn = new String(data.user.name);

    const temp = {
        id: photosHistory.length,
        url: urln,
        alt: altn,
        author: authorn,
        like: false,
    };
    photosHistory.push(temp);
}

//Отображаем картинку
function pictureRendering(data) {
    // pictureEl.setAttribute("src", data.url);
    // pictureEl.setAttribute("alt", data.alt);
    // figcaptureEl.textContent = `Photographer: ${data.author}`;
    // pEl.innerHTML = "";
    // pEl.append(pictureEl);
}

// Получаем данные из localStorage
function getDataFromLocalStorage() {
    countOfLikes = +localStorage.getItem("likes") ?? 0;
    currentPhotoNum = +localStorage.getItem("currentphotonum") ?? 0;
    const strPhotos = localStorage.getItem("photos");
    if (strPhotos !== null) {
        photosHistory = JSON.parse(strPhotos);
    } else {
        getPictureFromServer(urlRandomPhoto);
    }
}

// Сохраняем данные в localStorage
function setDataToLocalStorage() {
    if (photosHistory !== null) {
        localStorage.setItem("likes", countOfLikes);
        localStorage.setItem("currentphotonum".JSON.stringify(currentPhotoNum));
        localStorage.setItem("photos", JSON.stringify(photosHistory));
    } else {
        throw new Error(`func setDataToLocalStorage: parameter is null`);
    }
}
