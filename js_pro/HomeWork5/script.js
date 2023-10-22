"use strict";

const btm_slide = (e) => {
    showImg(indexValue = e);
}

const side_slide = (e) => {
    showImg(indexValue += e);
}

const showImg = (e) => {
    let i;
    const img = document.querySelectorAll('img');
    const slider = document.querySelectorAll('.btm-slides span');

    if (e > img.length) {
        indexValue = 1;
    }

    if (e < 1) {
        indexValue = img.length;
    }

    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }

    for (i = 0; i < slider.length; i++) {
        slider[i].style.background = "rgba(255,255,255,0.1)";
    }

    img[indexValue - 1].style.display = "block";
    slider[indexValue - 1].style.background = "white";
}

let indexValue = 1;
showImg(indexValue);
const btns = document.querySelectorAll(".btm-slides span");
const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        btm_slide(+e.target.dataset.number);
    })
});

arrowLeft.addEventListener("click", (e) => {
    side_slide(-1);
});

arrowRight.addEventListener("click", (e) => {
    side_slide(1);
});