"use strict";

const urlRandomPhoto =
    "https://api.unsplash.com/photos/random/?client_id=hogzj3kFFFplvMi0uANfWYsCPo1-lqgHj6UulC0KzcU";

const pictureEl = document.createElement("img");
pictureEl.classList.add("slide_picture-box");
pictureEl.classList.add("img");
const pEl = document.querySelector(".picture");
const figcaptureEl = document.querySelector(".slide_picture-description");
const figcaptureLikeEl = document.querySelector(".slide_picture-likes");
const likeEl = document.querySelector(".like-btn");
const prevEl = document.querySelector(".prev-btn");
const nextEl = document.querySelector(".next-btn");
const refreshEl = document.querySelector(".refresh-btn");

let photosHistory = [];
let countOfLikes = 0;
let isLoadFromServer;
let currentPhotoNum = 0;

prevEl.addEventListener("click", () => {
    localStorage.setItem("currentphotonum", JSON.stringify(--currentPhotoNum));
    location.reload();
});

nextEl.addEventListener("click", () => {
    localStorage.setItem("currentphotonum", JSON.stringify(++currentPhotoNum));
    if (currentPhotoNum === photosHistory.length - 1) {
        isLoadFromServer = false;
        localStorage.setItem(
            "isloadfromserver",
            JSON.stringify(isLoadFromServer)
        );
    }
    location.reload();
});

likeEl.addEventListener("click", (e) => setOrRemoveLike(likeEl));

refreshEl.addEventListener("click", () => {
    currentPhotoNum = photosHistory.length - 1;
    location.reload();
});

window.addEventListener("load", async () => {
    isLoadFromServer = JSON.parse(localStorage.getItem("isloadfromserver"));
    await getDataFromLocalStorage(isLoadFromServer);
    isLoadFromServer = true;
    localStorage.setItem("isloadfromserver", JSON.stringify(isLoadFromServer));

    pictureRendering(photosHistory[currentPhotoNum]);

    // Выключаем кнопки при достижении конечных положений для исключения ошибки выхода за пределы массива
    if (currentPhotoNum === 0) {
        prevEl.disabled = true;
        prevEl.classList.add("disabled");
    } else {
        prevEl.disabled = false;
        prevEl.classList.remove("disabled");
    }
    if (currentPhotoNum === photosHistory.length - 1) {
        nextEl.disabled = true;
        nextEl.classList.add("disabled");
    } else {
        nextEl.disabled = false;
        nextEl.classList.remove("disabled");
    }
});

window.addEventListener("beforeunload", async () => {
    await setDataToLocalStorage();
});

// Ставим или удаляем лайк
function setOrRemoveLike(element) {
    if (element.classList.contains("like")) {
        RefreshLikesData(element, --countOfLikes);
    } else {
        RefreshLikesData(element, ++countOfLikes);
    }
}

// Изменяем данные модели лайков и отрисовку
function RefreshLikesData(element, likes) {
    element.classList.toggle("like");
    localStorage.setItem("likes", likes);
    photosHistory[currentPhotoNum].like = !photosHistory[currentPhotoNum].like;
    figcaptureLikeEl.textContent =
        countOfLikes === 0 ? `No likes` : `You likes ${countOfLikes} pictures`;
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
    currentPhotoNum = photosHistory.length - 1;
    await setDataToLocalStorage();
}

//Отображаем картинку
function pictureRendering(data) {
    pictureEl.setAttribute("src", data.url);
    pictureEl.setAttribute("alt", data.alt);
    figcaptureEl.textContent = `Photographer: ${data.author}`;
    figcaptureLikeEl.textContent =
        countOfLikes === 0 ? `No likes` : `You likes ${countOfLikes} pictures`;
    pEl.innerHTML = "";
    pEl.append(pictureEl);
    data.like ? likeEl.classList.add("like") : likeEl.classList.remove("like");
}

// Получаем данные из localStorage или загружаем с сервера
async function getDataFromLocalStorage(isLoadFromServer) {
    countOfLikes = +localStorage.getItem("likes") ?? 0;
    currentPhotoNum = +localStorage.getItem("currentphotonum") ?? 0;
    const strPhotos = localStorage.getItem("photos");

    if (strPhotos === null) {
        await getPictureFromServer(urlRandomPhoto);
    } else {
        photosHistory = JSON.parse(strPhotos);
    }

    if (
        strPhotos !== null &&
        currentPhotoNum === photosHistory.length - 1 &&
        isLoadFromServer
    ) {
        await getPictureFromServer(urlRandomPhoto);
    }
}

// Сохраняем данные в localStorage
async function setDataToLocalStorage() {
    if (photosHistory !== null) {
        localStorage.setItem("likes", countOfLikes);
        localStorage.setItem(
            "currentphotonum",
            JSON.stringify(currentPhotoNum)
        );
        localStorage.setItem("photos", JSON.stringify(photosHistory));
    } else {
        throw new Error(`func setDataToLocalStorage: parameter is null`);
    }
}
