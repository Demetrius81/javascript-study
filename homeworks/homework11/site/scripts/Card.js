"use strict";

class Card {
    constructor(imgUrl, altName, title, description, currency, price, number) {
        this.imgUrl = imgUrl;
        this.altName = altName;
        this.title = title;
        this.description = description;
        this.currency = currency;
        this.price = price;
        this.number = number;
    }

    createCard() {
        const imgEl = document.createElement("img");
        imgEl.classList.add('shop__cards__card__img');
        imgEl.src = this.imgUrl;
        imgEl.alt = this.altName;

        const titleEl = document.createElement('p');
        titleEl.classList.add('shop__cards__card__small_title');
        titleEl.textContent = this.title;

        const descriptionEl = document.createElement('p');
        descriptionEl.classList.add('shop__cards__card__text');
        descriptionEl.classList.add('text');
        descriptionEl.textContent = this.description;

        const priceEl = document.createElement('p');
        priceEl.classList.add('shop__cards__card__price');
        priceEl.textContent = `${this.currency}${this.price}`;

        const divEl = document.createElement("div");
        divEl.classList.add('shop__cards__card__content');
        divEl.append(titleEl);
        divEl.append(descriptionEl);
        divEl.append(priceEl);

        const cardEl = document.createElement("div");
        cardEl.classList.add('shop__cards__card');
        cardEl.classList.add(`card-${this.number}`);
        cardEl.append(imgEl);
        cardEl.append(divEl);

        return cardEl;
    }
}
