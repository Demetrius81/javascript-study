"use strict";

const backBtn = document.querySelector(".back");
const forwardBtn = document.querySelector(".forward");

backBtn.addEventListener("click", () => {
    window.history.back();
});

forwardBtn.addEventListener("click", () => {
    window.history.forward();
});
