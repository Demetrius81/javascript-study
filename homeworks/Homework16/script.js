"use strict";

const urlString = "https://jsonplaceholder.typicode.com/users";
const userId = 1;
const user = {
  id: 5,
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};
const delay = 2000;
const elementId = "myElement";
const printTaskName = (x) => console.log(`Task ${x}`);

//Task 1

const getUserData = async (userId, url) => {
  if (userId === null || userId === undefined) {
    throw new Error(`Invalid argument: userId.`);
  }

  if (url === null || url.constructor.name !== "String") {
    throw new Error(`Invalid argument: url.`);
  }

  let response = null;
  let result = null;

  try {
    response = await fetch(url);

    if (response.ok) {
      result = await response.json();
    } else {
      throw new Error(
        `We have some problems! Look, response status is ${response.status}.`
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }

  return result.find((x) => x.id === userId);
};

getUserData(userId, urlString)
  .then((x) => {
    printTaskName(1);
    console.log(x);
  })
  .catch((error) => {
    printTaskName(1);
    console.log(error.message);
  });

//Task 2

const saveUserData = async (user, url) => {
  if (user === null || user === undefined) {
    throw new Error(`Invalid argument: userId.`);
  }

  if (url === null || url.constructor.name !== "String") {
    throw new Error(`Invalid argument: url.`);
  }

  let response = null;
  let result = null;
  let bodyString = JSON.stringify(user);

  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: bodyString,
    });

    if (response.ok) {
      result = response.status;
    } else {
      throw new Error(
        `We have some problems! Look, response status is ${response.status}.`
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }

  return result;
};

saveUserData(user, urlString)
  .then((x) => {
    printTaskName(2);
    console.log(`User data saved successfully. Status code is ${x}`);
  })
  .catch((error) => {
    printTaskName(2);
    console.log(error.message);
  });

//Task 3

const changeStyleDelayed = (id, delayTime) => {
  if (id === null || id.constructor.name !== "String" || id.length < 1) {
    throw new Error("Invalid argument: id.");
  }

  if (
    delayTime === null ||
    delayTime.constructor.name !== "Number" ||
    delayTime === undefined ||
    delayTime < 0
  ) {
    throw new Error("Invalid argument: delayTime.");
  }

  const selectedEl = document.querySelector(`#${id}`);
  setTimeout(() => selectedEl.classList.toggle("secondary-style"), delayTime);
};

const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", () => {
  changeStyleDelayed(elementId, delay);
});
