"use strict";

const cardsEl = document.querySelector(".shop__cards");

const data = JSON.parse(dataInfo);

const cards = [];
const cartCards = []; //Этот массивчик неплохо былобы отсылать на сервер и сохранять в личном кабинете пользователя.

function returnNubberFromCardClass(cardClass) {
  let tempString = cardClass.split("");
  let last = +tempString.pop();
  let sublast = +tempString.pop();
  return sublast === NaN ? last : sublast * 10 + last;
}

function buildCartSection() {
  const questionsEl = document.querySelector(".questions");

  const pEl = document.createElement("p");
  pEl.classList.add("cart__header__text");
  pEl.textContent = "Cart Items";

  const headerEl = document.createElement("div");
  headerEl.classList.add("cart__header");
  headerEl.append(pEl);

  const productCardsEl = document.createElement("div");
  productCardsEl.classList.add("cart__items__product_cards");

  const itemsEl = document.createElement("div");
  itemsEl.classList.add("cart__items");
  itemsEl.append(productCardsEl);

  const cartEl = document.createElement("div");
  cartEl.classList.add("cart");
  cartEl.append(headerEl);
  cartEl.append(itemsEl);

  questionsEl.after(cartEl);
}

function removeCartSection() {
  const cartEl = document.querySelector(".cart");
  cartEl.remove();
}

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

  cards.push(card);
  const cardEl = card.createCard();
  cardsEl.append(cardEl);
}

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-product")) {
    if (!cartCards.length) {
      buildCartSection();
    }
    const cartCardEl = document.querySelector(".cart__items__product_cards");
    let card = null;
    card = cards.find(
      (x) =>
        x.number ===
        returnNubberFromCardClass(
          e.target.parentElement.parentElement.classList[0] === "card"
            ? e.target.parentElement.parentElement.classList[1]
            : e.target.parentElement.parentElement.parentElement
                .classList[0] === "card"
            ? e.target.parentElement.parentElement.parentElement.classList[1]
            : e.target.parentElement.parentElement.parentElement.parentElement
                .classList[0] === "card"
            ? e.target.parentElement.parentElement.parentElement.parentElement
                .classList[1]
            : e.target.parentElement.parentElement.parentElement.parentElement
                .parentElement.classList[1]
        )
    );
    let index = cartCards.findIndex((x) => x.number === card.number);

    if (index < 0) {
      const cartCard = new CartCard(
        card.imgUrl,
        card.altName,
        card.title,
        "Test Class",
        card.currency,
        card.price,
        "Red",
        5,
        card.number
      );

      cartCards.push(cartCard);
      cartCardEl.append(cartCard.addProductToCart());
    } else {
      cartCards[index].addProductToCart();
    }
  }
});

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-product")) {
    let index = cartCards.findIndex(
      (x) =>
        x.number ===
        cartCards.find(
          (x) =>
            x.number ===
            returnNubberFromCardClass(
              e.target.parentElement.parentElement.classList[0] ===
                "cart__items__product_cards__card"
                ? e.target.parentElement.parentElement.classList[1]
                : e.target.parentElement.parentElement.parentElement
                    .classList[1]
            )
        ).number
    );
    let newCard = cartCards[index].removeProductFromCart();
    if (newCard === null) {
      cartCards.splice(index, 1);
      console.log(cartCards);
      if (!cartCards.length) {
        removeCartSection();
      }
    }
  }
});
