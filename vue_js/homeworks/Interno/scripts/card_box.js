"use strict";

Vue.component("card-box", {
  props: {},

  data() {
    return {
      size: 6,
      cards: [
        {
          id: 1,
          img: "../Interno/img/small-card__Photo1.png",
          imgDescription: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022 ",
        },
        {
          id: 2,
          img: "../Interno/img/small-card__Photo2.png",
          imgDescription: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022 ",
        },
        {
          id: 3,
          img: "../Interno/img/small-card__Photo3.png",
          imgDescription: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022 ",
        },
        {
          id: 4,
          img: "../Interno/img/small-card__Photo4.png",
          imgDescription: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "25 December,2022 ",
        },
        {
          id: 5,
          img: "../Interno/img/small-card__Photo5.png",
          imgDescription: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "25 December,2022 ",
        },
        {
          id: 6,
          img: "../Interno/img/small-card__Photo6.png",
          imgDescription: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022 ",
        },
        {
          id: 7,
          img: "../Interno/img/small-card__Photo2.png",
          imgDescription: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022 ",
        },
        {
          id: 8,
          img: "../Interno/img/small-card__Photo3.png",
          imgDescription: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022 ",
        },
        {
          id: 9,
          img: "../Interno/img/small-card__Photo4.png",
          imgDescription: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "25 December,2022 ",
        },
        {
          id: 10,
          img: "../Interno/img/small-card__Photo5.png",
          imgDescription: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "25 December,2022 ",
        },
        {
          id: 11,
          img: "../Interno/img/small-card__Photo3.png",
          imgDescription: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022 ",
        },
        {
          id: 12,
          img: "../Interno/img/small-card__Photo4.png",
          imgDescription: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "25 December,2022 ",
        },
        {
          id: 13,
          img: "../Interno/img/small-card__Photo5.png",
          imgDescription: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "25 December,2022 ",
        },
        {
          id: 14,
          img: "../Interno/img/small-card__Photo6.png",
          imgDescription: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022 ",
        },
        {
          id: 15,
          img: "../Interno/img/small-card__Photo2.png",
          imgDescription: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022 ",
        },
        {
          id: 16,
          img: "../Interno/img/small-card__Photo3.png",
          imgDescription: "Interior Design",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022 ",
        },
        {
          id: 17,
          img: "../Interno/img/small-card__Photo4.png",
          imgDescription: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction Work",
          date: "25 December,2022 ",
        },
        {
          id: 18,
          img: "../Interno/img/small-card__Photo5.png",
          imgDescription: "Living Design",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "25 December,2022 ",
        },
      ],
      currentPage: 1,
      links: [
        {
          name: "Home",
          url: "index.html",
        },
        {
          name: "Project",
          url: "project.html",
        },
        {
          name: "Blog",
          url: "blog.html",
        },
      ],
    };
  },
  methods: {
    checkIsNegative(id) {
      return id === 2;
    },
    moveLeft() {
      this.currentPage--;
    },
    moveRight() {
      this.currentPage++;
    },
    setPage(num) {
      this.currentPage = num;
    },
    moveToDetails(title) {
      window.location.href = "blog_details.html";
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.cards.length / this.size);
    },
    pagesArray() {
      let result = [];

      for (let i = 1; i <= this.totalPages; i++) {
        result.push({
          id: i,
          text: i < 10 ? `0${i}` : `${i}`,
        });
      }
      return result;
    },
    cardsOnPage() {
      let result = [];
      let index = 1;
      for (
        let i = (this.currentPage - 1) * this.size;
        i < this.currentPage * this.size;
        i++
      ) {
        result.push({
          id: index,
          img: this.cards[i].img,
          imgDescription: this.cards[i].imgDescription,
          title: this.cards[i].title,
          date: this.cards[i].date,
        });
        index++;
      }

      return result;

      //Так было бы намного проще, но на странице 2 карточка из 6 имеет особенность в дизайне.
      // return cards.slice(
      //     (this.currentPage - 1) * size,
      //     this.currentPage * size);
    },
  },
  template: `
                   <section class="small-content center">
                    <div class="small-content__header">
                        <h1 class="small-content__header_head">Articles & News</h1>
                    </div>
                    <div class="small-content__card-box">
                        <div
                            class="small-card"
                            v-for="item in cardsOnPage"
                            :key="item.id"
                            v-bind:class="{negative: checkIsNegative(item.id)}"
                        >
                            <div class="small-card__img">
                                <img v-bind:src="item.img" v-bind:alt="item.imgDescription">
                                <p class="small-card__img_description">{{item.imgDescription}}</p>
                            </div>
                            <div class="small-card__content">
                                <h2 class="small-card__content_header">{{item.title}}</h2>
                                <div class="small-card__date-btn-box">
                                    <p class="small-card__date-btn-box_text">{{item.date}}</p>
                                    this button
                                    <button class="small-card__date-btn-box_btn" v-on:click="moveToDetails(item.title)">
                                        <svg
                                            width="9"
                                            height="16"
                                            viewBox="0 0 9 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128"
                                                stroke="#292F36"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="small-content__pagination">
                        <div class="pagination__box">
                            <button class="pagination__box_button button-left" v-on:click="moveLeft()" v-bind:disabled="currentPage === 1">
                                &#10094;
                            </button>
                            <button
                                class="pagination__box_button"
                                v-for="item in pagesArray"
                                :key="item.id"
                                v-bind:class="{current: item.id === currentPage}"
                                v-on:click="setPage(item.id)"
                            >{{item.text}}</button>
                            <button class="pagination__box_button button-right" v-on:click="moveRight()" v-bind:disabled="currentPage === (totalPages)">
                                &#10095;
                            </button>
                        </div>
                    </div>
                </section>
    `,
});
