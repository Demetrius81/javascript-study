"use strict";

const bodyEl = document.querySelector("body");
bodyEl.insertAdjacentHTML(
  "afterbegin",
  `<div id="app">
            <h1 class="header">{{message}}</h1>
            <div v-show="choiseIsDone">
                <section v-if="iAmOfLegalAge">
                    <h3>Можете заказать товар &#128522;</h3>
                    <p>Товаров в корзине {{count}}</p>
                    <div class="shop">
                        <div class="card" v-for="product in products" :key="product.id">
                            <div v-if="!product.productInCard">
                                <button class="card__btn" v-on:click="incrementCount(product.id)">Add to cart</button>
                            </div>
                            <div v-else="product.productInCard">
                                <button class="card__btn" v-on:click="goToCard()">Go to card</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section v-else="!iAmOfLegalAge">
                    <h3>Доступ закрыт &#128563;</h3>
                </section>
            </div>
            <div v-show="!choiseIsDone">
                <button v-on:click="choiceYes()">Мне исполнилось 18 лет</button>
                <button v-on:click="choiceNo()">Мне еще нет 18 лет</button>
            </div>
            <div>
                <button v-on:click="showContentJS()">Показать еще JS</button>
                <button v-on:click="showContentHTML()">Показать еще CSS</button>
                <div class="content block-animation" v-show="showing">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque consequuntur quos vitae tempora ea temporibus unde facilis autem, error blanditiis ut sequi culpa omnis amet consequatur quod rem id aliquid impedit! Nemo fugit, aperiam eum cupiditate quaerat velit quae aut sint libero inventore suscipit dolorem eaque quam eveniet corporis, sunt iusto nam tenetur temporibus repudiandae exercitationem voluptates. Aperiam obcaecati unde enim magnam dolorem fugiat, ipsa soluta assumenda veniam fugit, velit pariatur sapiente consequatur rem minima officia veritatis iusto sit repudiandae nisi. Dolore ad, amet repudiandae enim tempora laboriosam sint! Quis modi, quasi molestias, hic aliquam omnis dolorum ea perspiciatis nemo eum architecto laudantium nostrum voluptatibus laboriosam numquam iste ex? Culpa nihil tempore laborum, deleniti voluptatem aliquid a reiciendis cumque architecto modi nemo neque consectetur amet, dignissimos odit nam cum. Ea atque modi quae itaque voluptates, iure minus mollitia. Quis ab numquam autem perspiciatis impedit quas deleniti nulla unde doloribus natus ipsa saepe amet esse laboriosam odio modi deserunt sapiente aliquid dolore nobis, possimus, nihil pariatur error molestiae! Consequuntur mollitia iste nesciunt delectus. Vel, impedit placeat. Necessitatibus nostrum distinctio, accusantium totam beatae tempora perferendis eius animi ad adipisci qui aliquid et fugiat ut cumque nesciunt reiciendis amet harum vitae excepturi at.</p>
                </div>
            </div>
            <div>
                <button v-on:click="generateNumber()">Сгенерировать число</button>
                <div v-show="showGenerationResult">
                    <p v-if="number < 5">Число меньше 5</p>
                    <p v-else-if="number >=5 && number <= 9">Число от 5 до 9</p>
                    <p v-else>Число равно 10</p>
                </div>
                <p>{{number}}</p>
            </div>
        </div>`
);

new Vue({
  el: "#app",
  data: {
    message: "Hello VUE!!!",
    count: 0,
    products: [
      { id: 1, productInCard: false },
      { id: 2, productInCard: false },
      { id: 3, productInCard: false },
      { id: 4, productInCard: false },
    ],
    choiseIsDone: false,
    iAmOfLegalAge: false,
    showing: false,
    number: 0,
    showGenerationResult: false,
  },
  methods: {
    incrementCount(i) {
      this.count++;
      this.products.forEach((x) => {
        if (x.id === i) {
          x.productInCard = true;
        }
      });
    },
    goToCard() {
      window.location.href = "card.html";
    },
    choiceYes() {
      this.choiseIsDone = true;
      this.iAmOfLegalAge = true;
    },
    choiceNo() {
      this.choiseIsDone = true;
      this.iAmOfLegalAge = false;
    },
    showContentHTML() {
      this.showing = !this.showing;

      const animateEl = document.querySelector(".block-animation");
      animateEl.classList.add("block-animation-css");
    },
    showContentJS() {
      this.showing = !this.showing;

      const animateEl = document.querySelector(".block-animation");
      let start = Date.now();
      let timer = setInterval(() => {
        let timePassed = Date.now() - start;

        if (timePassed >= 400) {
          clearInterval(timer);
          return;
        }

        draw(timePassed);
      }, 20);

      const draw = (timePassed) => {
        animateEl.style.height = timePassed + "px";
      };
    },
    generateNumber() {
      this.showGenerationResult = true;

      min = Math.ceil(1);
      max = Math.floor(11);
      this.number = Math.floor(Math.random() * (max - min)) + min;
    },
  },
});
