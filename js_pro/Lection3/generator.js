"use strict";

//Генератор для генерации последовательности чисел

function* numberGenerator() {
    let number = 1;

    while (true) {
        yield number;
        number++;
    }
}

//Создаем экземпляр генератора
const generator = numberGenerator();

//Генерируем итератор, который будет возвращать следующее значение при каждом вызове next()
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
