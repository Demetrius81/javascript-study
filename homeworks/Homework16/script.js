"use strict";

const user = {
  id: 5,
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};

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
  } catch (ex) {
    throw new Error(ex);
  }

  return result;
};

const saveUserData = async (user, url) => {};
