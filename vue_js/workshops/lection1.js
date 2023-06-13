"use strict";

const bodyel = document.querySelector("body");
bodyel.insertAdjacentHTML(
  "afterbegin",
  `<div id="app">
            <h1 class="title">{{message}}</h1>
            <!-- <h2>{{sayHello()}}</h2> -->
            <button v-on:click="changeText">click button</button>
            <br>
            <h2>Counter</h2>
            <button v-on:click="increase(5, $event)">Increase</button>
            <p>{{counter}}</p>
            <br>
            <h2 v-on:mousemove="mouseMove($event)">
                Mouse move {{x}} - {{y}}
                <span v-on:mousemove.stop.prevent>Stop Text</span>
            </h2>
            <p v-html="bigText"></p>
            <h3 v-if="!productAddInCart">Добавить товар в корзину?</h3>
            <h3 v-else="productAddInCart">Товар добавлен в корзину</h3>
            <h3 v-show="productAddInCart">SHOW</h3>
            <button click="productAddInCart = !productAddInCart">Add product</button>
        </div>`
);

new Vue({
  el: "#app",
  data: {
    message: "Hello VUE!!!",
    counter: 0,
    x: 0,
    y: 0,
    bigText: 'big text <span>new text <a href="#">info</a></span>',
    productAddInCart: false,
  },
  methods: {
    sayHello() {
      this.message = "NEW MESSAGE";
      return this.message;
    },
    changeText() {
      this.message = "Text click";
    },
    increase(step, event) {
      this.counter += step;
      console.log(event);
    },
    mouseMove(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
  },
});
