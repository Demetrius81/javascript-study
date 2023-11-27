// "use strict";

//task1

let generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            if (randomNumber) {
                resolve(randomNumber);
            } else {
                reject("Error");
            }
        }, 1000);
    });
};

generateRandomNumber()
    .then((number) => {
        console.log(`Random number: ${number}`);
    })
    .catch((error) => console.log(`Error: ${error}`));

// task2

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(`Data error`));
    });
};

fetchData(`https://jsonplaceholder.typicode.com/todos/1`)
    .then((data) => console.log(`Loaded data: ${data}`))
    .catch((error) => console.log(`Error: ${error}`));

// fetchData(`https://test.api.com/data`)
//     .then((data) => console.log(`Loaded data: ${data}`))
//     .catch((error) => console.log(`Error: ${error}`));

//task3

const checkIfFileExists = (file) => {};

const checkFileExists = (file) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileExsists = checkIfFileExists(file);
            if (fileExsists) {
                resolve(`File exists`);
            } else {
                reject(`File not exsists`);
            }
        }, 2000);
    });
};

checkFileExists(`test.txt`)
    .then((message) => console.log(message))
    .catch((err) => console.log(err))
    .finally(() => console.log(`File is checked`));

//task4

const calculateSum = (a, b) => {
    return new Promise((resolve, reject) => {
        const sum = a + b;
        resolve(sum);
    });
};

calculateSum(3, 7).then((result) => console.log(`Sum of numbers: ${result}`));

//task5

const divideNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(`Error. Divide by zero impossible`);
        } else {
            resolve(a / b);
        }
    });
};

divideNumbers(10, 2)
    .then((result) => {
        console.log(`Result: ${result}`);
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    });

//task6

new Promise(function (resolve) {
    setTimeout(() => resolve(1), 1000);
})
    .then(function (result) {
        console.log(result);
        return new Promise((resolve) => {
            setTimeout(() => resolve(result * 2), 1000);
        });
    })
    .then(function (result) {
        console.log(result);
        return new Promise((resolve) => {
            setTimeout(() => resolve(result * 2), 1000);
        });
    })
    .then(function (result) {
        console.log(result);
    });

//task7

const processData = (data) => data;

const performOperation = (data) => {
    return new Promise((resolve, reject) => {
        let result = processData(data);
        if (result) {
            resolve(result);
        } else {
            reject(`Operation Error`);
        }
    }).finally(() => console.log(`Operation complete`));
};

performOperation("example")
    .then((result) => console.log(`Operation result: ${result}`))
    .catch((err) => console.log(`Error: ${err}`));

//task8

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error(`Error!`)), 2000)
    ),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
])
    .then(console.log)
    .catch(console.log);

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
])
    .then(console.log)
    .catch(console.log);

//task9

const checkServerResponse = (urls) => {
    let promises = urls.map((url) => fetch(url));

    return Promise.race(promises).then((response) => {
        return response.url;
    });
};

let urls = [
    "https://api.example.com/server1",
    "https://api.example.com/server2",
    "https://api.example.com/server3",
];

checkServerResponse(urls)
    .then((fastestServer) => console.log(`Fastest server is: ${fastestServer}`))
    .catch((err) => console.log(`Error: ${err}`))
    .finally(() => console.log(`Servers is checked`));
