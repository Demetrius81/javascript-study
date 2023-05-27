"use strict";

const itemSize = {
  1: "XS",
  2: "S",
  3: "M",
  4: "L",
  5: "XL",
  6: "XXL",
  7: "XXXL",
};

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
    imgEl.classList.add("card__img");
    imgEl.src = this.imgUrl;
    imgEl.alt = this.altName;

    const spanEl = document.createElement("span");
    spanEl.classList.add("add-product");
    spanEl.insertAdjacentHTML(
      "beforeend",
      `<svg
                                            width="27"
                                            height="25"
                                            viewBox="0 0 27 25"
                                            fill="none"
                                            class="add-product"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z" fill="white"/>
                                        </svg>`
    );

    const pEl = document.createElement("p");
    pEl.textContent = "Add to Card";
    pEl.classList.add("add-product");
    pEl.prepend(spanEl);

    const btnEl = document.createElement("button");
    btnEl.classList.add("card__image-btn");
    btnEl.classList.add("add-product");
    btnEl.append(pEl);

    const figureEl = document.createElement("figure");
    figureEl.classList.add("card__image-back");
    figureEl.append(btnEl);
    figureEl.append(imgEl);

    const titleEl = document.createElement("p");
    titleEl.classList.add("card__small-title");
    titleEl.textContent = this.title;

    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("card__text");
    descriptionEl.classList.add("text");
    descriptionEl.textContent = this.description;

    const priceEl = document.createElement("p");
    priceEl.classList.add("card__price");
    priceEl.textContent = `${this.currency}${this.price}`;

    const divEl = document.createElement("div");
    divEl.classList.add("card__content");
    divEl.append(titleEl);
    divEl.append(descriptionEl);
    divEl.append(priceEl);

    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.classList.add(`card-${this.number}`);
    cardEl.append(figureEl);
    cardEl.append(divEl);

    return cardEl;
  }
}

class CartCard {
  constructor(
    imgUrl,
    altName,
    title,
    itemClass,
    currency,
    price,
    color,
    size,
    number
  ) {
    this.imgUrl = imgUrl;
    this.altName = altName;
    this.title = title;
    this.itemClass = itemClass;
    this.currency = currency;
    this.price = price;
    this.color = color;
    this.size = size;
    this.number = number;
  }

  addProductToCart() {
    if (this.quantity === undefined) {
      this.quantity = 1;
      return this.createCartCard();
    } else {
      ++this.quantity;
      return this.changeQuantity();
    }
  }

  removeProductFromCart() {
    if (this.quantity > 1) {
      --this.quantity;
      return this.changeQuantity();
    } else {
      this.quantity = 0;
      this.changeQuantity().remove();
      return null;
    }
  }

  createCartCard() {
    //creating image

    const imgEl = document.createElement("img");
    imgEl.classList.add("cart__items__product_cards__card__img");
    imgEl.src = this.imgUrl;
    imgEl.alt = this.altName;

    //creating title

    const spanEl = document.createElement("span");
    spanEl.textContent = this.itemClass;

    const brEl = document.createElement("br");

    const titleEl = document.createElement("h3");
    titleEl.classList.add(
      "cart__items__product_cards__card__description__title"
    );
    titleEl.textContent = this.title;
    titleEl.append(brEl);
    titleEl.append(spanEl);

    //creating cross btn

    const crossEl = document.createElement("button");
    crossEl.classList.add(
      "cart__items__product_cards__card__description__cross"
    );
    crossEl.classList.add("remove-product");
    crossEl.insertAdjacentHTML(
      "beforeend",
      `<svg
                                            width="18"
                                            height="18"
                                            class="remove-product"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467832C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>
                                        </svg>`
    );

    //creating price

    const spanPriceEl = document.createElement("span");
    spanPriceEl.classList.add(
      "cart__items__product_cards__card__description__text_color_red"
    );
    spanPriceEl.textContent = `${this.currency}${this.price}`;

    const priceEl = document.createElement("p");
    priceEl.classList.add(
      "cart__items__product_cards__card__description__text"
    );
    priceEl.textContent = "Price:";
    priceEl.append(spanPriceEl);

    //creating color

    const spanColorEl = document.createElement("span");
    spanColorEl.classList.add(
      "cart__items__product_cards__card__description__text_color"
    );
    spanColorEl.textContent = this.color;

    const colorEl = document.createElement("p");
    colorEl.classList.add(
      "cart__items__product_cards__card__description__text"
    );
    colorEl.textContent = "Color:";
    colorEl.append(spanColorEl);

    //creating size

    const spanSizeEl = document.createElement("span");
    spanSizeEl.classList.add(
      "cart__items__product_cards__card__description__text_color"
    );
    spanSizeEl.textContent = itemSize[this.size];

    const sizeEl = document.createElement("p");
    sizeEl.classList.add("cart__items__product_cards__card__description__text");
    sizeEl.textContent = "Size:";
    sizeEl.append(spanSizeEl);

    //creating quantity

    const spanQuantityEl = document.createElement("span");
    spanQuantityEl.classList.add(
      "cart__items__product_cards__card__description__count"
    );
    spanQuantityEl.textContent = this.quantity;

    const quantityEl = document.createElement("p");
    quantityEl.textContent = "Quantity:";
    quantityEl.append(spanQuantityEl);

    const quantityBoxEl = document.createElement("div");
    quantityBoxEl.append(quantityEl);

    //build figure

    const figureEl = document.createElement("figure");
    figureEl.classList.add("cart__items__product_cards__card__picture");
    figureEl.append(imgEl);

    //build description

    const divDescriptionEl = document.createElement("div");
    divDescriptionEl.classList.add(
      "cart__items__product_cards__card__description"
    );
    divDescriptionEl.classList.add(
      "cart__items__product_cards__card__description__text"
    );
    divDescriptionEl.append(titleEl);
    divDescriptionEl.append(crossEl);
    divDescriptionEl.append(priceEl);
    divDescriptionEl.append(colorEl);
    divDescriptionEl.append(sizeEl);
    divDescriptionEl.append(quantityBoxEl);

    //build card of product

    const divCardEl = document.createElement("div");
    divCardEl.classList.add("cart__items__product_cards__card");
    divCardEl.classList.add(`cart__items__product_cards__card${this.number}`);
    divCardEl.append(figureEl);
    divCardEl.append(divDescriptionEl);

    return divCardEl;
  }

  changeQuantity() {
    const divCardEl = document.querySelector(
      `.cart__items__product_cards__card${this.number}`
    );
    const spanQuantityEl = divCardEl.querySelector(
      ".cart__items__product_cards__card__description__count"
    );
    spanQuantityEl.textContent = this.quantity;

    return divCardEl;
  }
}
