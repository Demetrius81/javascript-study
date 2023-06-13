"use strict";

//Task 2

const loadData = (url) => {
  const request = new XMLHttpRequest();
  let result = null;
  request.open("GET", url);
  request.send();
  //   request.onload = () => {
  //     if (request.readyState === XMLHttpRequest.DONE) {
  //       const status = request.status;
  //       if (status === 200) {
  //         console.log(request.responseText);
  //         result = request.response;
  //       } else {
  //         console.log(
  //           `We have some problems! Look, response status is ${status}.`
  //         );
  //       }
  //     }
  //   };
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      const status = request.status;
      if (status === 200) {
        console.log(request.responseText);
      } else {
        console.log(
          `We have some problems! Look, response status is ${status}.`
        );
      }
    }
  };

  return result;
};

// console.log(loadData("https://jsonplaceholder.typicode.com/posts/1"));
console.log(loadData("https://jsonplaceholder.typicode.com/users"));

// console.log(loadData("https://jsonplaceholder.typicode.com/posts/1"));

//Task 3

const getData = async (url) => {
  let response = null;
  let result = null;

  try {
    // response = await fetch(url);

    response = await fetch(url, {
      mode: "no-cors",
    });

    if (response.ok) {
      result = await response.json();
    } else {
      throw new Error(
        `We have some problems! Look, response status is ${response.status}.`
      );
    }
  } catch (ex) {
    return ex;
  }

  return result;
};

const main = async (url) => {
  const result = await getData(url);
  console.log(result);
};

// main("https://jsonplaceholder.typicode.com/posts/1");
// main("https://jsonplaceholder.typicode.com/users");
main("http://localhost:5241/api/Pets/getall");
