"use strict";

const cardsEl = document.querySelector(".shop__cards");

const data = JSON.parse(dataInfo);

// console.log(data);

for (let i = 0; i < data.length; i++) {
  const card = new Card(
    data[i].imgUrl,
    data[i].altName,
    data[i].title,
    data[i].description,
    data[i].currency,
    data[i].price,
    i + 1
  );

  cardsEl.append(card.createCard());
}
