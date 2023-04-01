// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

startTask(1);

const pow = (n) => n ** 3;
console.log(pow(2));

endTask();

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

startTask(2);

const inputPositiveNumber = function () {
  for (let i = 3; i > 0; i--) {
    let num = +prompt("Введите положительное число");

    if (num !== NaN && num > 0) {
      return num;
    } else {
      alert(
        `Вы ввели не число или число меньше нуля. Повторите ввод. У вас осталось ${
          i - 1
        } попыток`
      );
    }
  }
  return null;
};

const netSalary = (salary) => {
  salary *= 0.87;
  console.log(`Размер заработной платы за вычетом налогов равен ${salary}`);
};

let salary = inputPositiveNumber();

if (salary !== null) {
  netSalary(salary);
}

endTask();

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

startTask(3);

class Max {
  static inputNumber(index) {
    for (let i = 3; i > 0; i--) {
      let num = +prompt(`Введите ${index} число`);

      if (num !== NaN) {
        return num;
      } else {
        alert(
          `Вы ввели не число или число меньше нуля. Повторите ввод. У вас осталось ${
            i - 1
          } попыток`
        );
      }
    }
    return null;
  }

  static maxThree(arr) {
    return arr.reduce((acc, curr) => (acc > curr ? acc : curr));
  }
}

let numArr = [];

for (let i = 0; i < 3; i++) {
  numArr.push(Max.inputNumber(i + 1));
}

console.log(Max.maxThree(numArr));

endTask();

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

startTask();

class Calc {
  static addition(a, b) {
    return a + b;
  }
  static difference(a, b) {
    return a > b ? a - b : b - a;
  }
  static multiplication(a, b) {
    return a * b;
  }
  static division(a, b) {
    return a / b;
  }
}

const arr = [];

for (let i = 0; i < 2; i++) {
  arr.push(Max.inputNumber(i + 1));
}

console.log(`Сумма чисел равна ${Calc.addition(arr[0], arr[1])}`);
console.log(`Разность чисел равна ${Calc.difference(arr[0], arr[1])}`);
console.log(`Произведение чисел равно ${Calc.multiplication(arr[0], arr[1])}`);
console.log(`Частное чисел равно ${Calc.division(arr[0], arr[1])}`);

endTask();

//==UX/UI======================================================

function startTask(n) {
  console.log(`Task ${n}`);
  endTask();
}

function endTask() {
  console.log("=============================");
}
