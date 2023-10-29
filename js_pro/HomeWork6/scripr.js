"use strict";

const pictureEl = document.querySelector(".slide_picture-box img");
console.log(pictureEl);
const figcaptureEl = document.querySelector(".slide_picture-description");
const likeEl = document.querySelector(".like-btn");
const prevEl = document.querySelector(".prev-btn");
const nextEl = document.querySelector(".next-btn");
const refreshEl = document.querySelector(".refresh-btn");
let countOfLikes;
prevEl.addEventListener("click", () => history.back);
nextEl.addEventListener("click", () => history.forward);

likeEl.addEventListener("click", (e) => setOrRemoveLike(likeEl));
refreshEl.addEventListener("click", () => location.reload());

window.addEventListener("load", () => {
    countOfLikes = +localStorage.getItem("likes") ?? 0;
});
window.addEventListener("beforeunload", () => {
    localStorage.setItem("likes", countOfLikes);
    history.pushState(this);
});

function setOrRemoveLike(element) {
    if (element.classList.contains("like")) {
        element.classList.remove("like");
        localStorage.setItem("likes", --countOfLikes);
    } else {
        element.classList.add("like");
        localStorage.setItem("likes", ++countOfLikes);
    }
}