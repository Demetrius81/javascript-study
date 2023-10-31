"use strict";

// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof.
// Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока действия), а у RegularUser такого свойства нет.
// Создайте функцию getAccountInfo(user), которая принимает объект класса User и возвращает информацию о наличии и сроке действия премиум-аккаунта, используя Опциональную цепочку вызовов методов и оператор нулевого слияния.
// В функции getAccountInfo используйте instanceof для проверки типа переданного пользователя и дайте соответствующий ответ.

// Заготовка для учеников (скинуть в комментарии):

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class PremiumUser extends User {
    constructor(name, surname) {
        super(name, surname);
        this.premiumAccount = new Date().setFullYear(
            new Date().getFullYear() + 1
        );
    }
    // premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); // Пример: установите срок действия на год вперед
}

// создать RegularUser
class RegularUser extends User {}

function getAccountInfo(user) {
    if (user instanceof User) {
        return user.premiumAccount ?? "Tis account is regular.";
    }

    return "Тип пользователя не определен";
    // Премиум аккаунт действителен до такой-то даты или информация отсутствует
    // пользователь без премиум аккаунта
    // Тип пользователя не определен"
}

// Проверка

let vasily = new PremiumUser("Vasily", "Pupkin");
let johan = new RegularUser("Johan", "Schmidt");

console.log(getAccountInfo(vasily));
console.log(getAccountInfo(johan));
