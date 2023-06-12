//Task 1

const delayedMessage = (message, delay) =>
  setTimeout(() => console.log(message), delay);

// delayedMessage("Сообщение 1", 2000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 3", 3000);
// console.log("Конец программы");

//Task 2

// const tasks = [
//   { name: "task 1", time: 1000 },
//   { name: "task 2", time: 2000 },
//   { name: "task 3", time: 3000 },
//   { name: "task 4", time: 4000 },
//   { name: "task 5", time: 5000 },
// ];

// const delayTasks = (tasksArr, timeout) => {
//   tasksArr.forEach((item) => {
//     delayedMessage(`${item.name} complete.`, item.time + timeout);
//   });
// };

// delayTasks(tasks, 1000);

//Task 3

// const loadData = (url) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", url);
//   try {
//     request.send();
//   } catch (error) {
//     console.log(
//       `We have some problems! Look, response state is ${request.readyState}.`
//     );
//   }

//   request.onreadystatechange = () => {
//     if (request.readyState === XMLHttpRequest.DONE) {
//       if (request.status === 200) {
//         console.log(request.responseText);
//       } else {
//         console.log(
//           `We have some problems! Look, response status is ${request.status}.`
//         );
//       }
//     }
//   };
// };

// loadData("https://jsonplaceholder.typicode.com/posts/1");
// loadData("https://jsonplaceholder.typicode.com/users");

//Task 4

function splitString(str) {
  let from = 0;
  let index = 0;
  let count = 0;
  let splitter = {};

  splitter.count = function () {
    return count;
  };

  splitter.next = function () {
    if (index === str.length) {
      return null;
    }

    while (++index) {
      let currentIsDigit = isDigit(str.charAt(index - 1));
      let nextChar = str.charAt(index);
      let currentIsLast = index === str.length;

      let isBorder = currentIsLast || xor(currentIsDigit, isDigit(nextChar));
      if (isBorder) {
        let part = str.slice(from, index);
        from = index;
        count++;
        return {
          IsNumber: currentIsDigit,
          Value: currentIsDigit ? Number(part) : part,
        };
      }
    }
  };

  return splitter;
}

function xor(a, b) {
  return a ? !b : b;
}

function isDigit(chr) {
  let charCode = function (ch) {
    return ch.charCodeAt(0);
  };
  let code = charCode(chr);
  return code >= charCode("0") && code <= charCode("9");
}

function compareStrings(str1, str2) {
  let compare = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };

  let splitter1 = splitString(str1);
  let splitter2 = splitString(str2);

  while (true) {
    let first = splitter1.next();
    let second = splitter2.next();

    if (null !== first && null !== second) {
      if (xor(first.IsNumber, second.IsNumber)) {
        return first.IsNumber ? -1 : 1;
      } else {
        let comp = compare(first.Value, second.Value);

        if (comp != 0) {
          return comp;
        }
      }
    } else {
      return compare(splitter1.count(), splitter2.count());
    }
  }
}

const getData = async (url) => {
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
    return ex;
  }

  return result;
};

const sortArr = (url) => {
  let result = getData(url).then((x) => x);
  result.sort((a, b) => compareStrings(a.name, b.name));
  console.log(result);
};

const onFulfilled = (resolve) => {
  return resolve;
};

const onRejected = (reject) => {
  return reject;
};

console.log(
  getData("https://jsonplaceholder.typicode.com/users").then(
    onFulfilled,
    onRejected
  )
);
