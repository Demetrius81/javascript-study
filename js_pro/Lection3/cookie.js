"use strict";

//task1

const setCookie = (name, value, days) => {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    let cookieValue =
        encodeURIComponent(value) + "; expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + cookieValue;
};

setCookie("username", "John Doe", 7);
setCookie("userinfo", "Mister", 5);
setCookie("userinfo2", "Mister2", 10);

//task2

const getCookie = (name) => {
    let cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};

let username = getCookie("username");
console.log(`username = ${username}`);

//task3

const deleteCookie = (name) => {
    document.cookie =
        name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

deleteCookie("userinfo2");
