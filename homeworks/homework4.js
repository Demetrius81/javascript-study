function startEnd(n = 0) {
  if (n !== 0) {
    console.log(`Task ${n}`);
  }
  console.log("--------------------------------\n\n");
}

// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

startEnd(1);

for (let i = 0; i <= 10; i++) {
  if (i !== 0) {
    switch (i % 2) {
      case 0:
        console.log(`${i} – четное число`);
        break;
      case 1:
        console.log(`${i} – нечетное число`);
        break;
      default:
        console.log("Some error!");
        break;
    }
  } else {
    console.log(`${i} – это ноль`);
  }
}

startEnd();

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

startEnd(2);

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);

console.log(arr);

startEnd();

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

startEnd(3);

function createArray(n, m) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random(Number) * m));
  }

  return arr;
}

arr = createArray(5, 10);

console.log(arr);

let result = arr.reduce((accum, current) => accum + current);

console.log(`Вариант 1: ${result}`);

result = 0;

for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}

console.log(`Вариант 2: ${result}`);

startEnd();

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

startEnd("*");

result = "";

for (let i = 0; i < 20; i++) {
  result += "x";
  console.log(result);
}

startEnd();
