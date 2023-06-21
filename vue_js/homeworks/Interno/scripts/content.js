"use strict";

Vue.component("content-articles", {
  data() {
    return {
      tags: [
        {
          id: 1,
          tagName: "Kitchen",
          check: false,
        },
        {
          id: 2,
          tagName: "Bedroom",
          check: false,
        },
        {
          id: 3,
          tagName: "Building",
          check: false,
        },
        {
          id: 4,
          tagName: "Architecture",
          check: false,
        },
        {
          id: 5,
          tagName: "Kitchen Planning",
          check: false,
        },
        {
          id: 6,
          tagName: "Bedroom",
          check: false,
        },
      ],
      currentTag: "",
      articles: [
        {
          id: 1,
          tag: "Kitchen",
          urlImg: "./img/details1.png",
          title: `Kitchen Let’s Get Solution For Building Construction Work`,
          description: ``,
          listOfProperties: [],
          content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                              Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          date: "26 December,2022",
        },
        {
          id: 2,
          tag: "Kitchen Planning",
          urlImg: "./img/details2.png",
          title: `Kitchen Planning Low Cost Latest Invented Interior Designing Ideas.`,
          description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          listOfProperties: [
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          ],
          content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                              Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          date: "26 December,2022",
        },
        {
          id: 3,
          tag: "Building",
          urlImg: "./img/details1.png",
          title: `Building Best For Any Office & Business Interior Solution`,
          description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          listOfProperties: [
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          ],
          content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                              Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          date: "26 December,2022",
        },
        {
          id: 4,
          tag: "Bedroom",
          urlImg: "./img/details2.png",
          title: `Bedroom Let’s Get Solution For Building Construction Work`,
          description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          listOfProperties: [
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          ],
          content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                              Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          date: "26 December,2022",
        },
        {
          id: 5,
          tag: "Architecture",
          urlImg: "./img/details1.png",
          title: `Architecture Low Cost Latest Invented Interior Designing Ideas.`,
          description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          listOfProperties: [
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          ],
          content: ``,
          date: "26 December,2022",
        },
        {
          id: 6,
          tag: "Building",
          urlImg: "./img/details2.png",
          title: `Building Best For Any Office & Business Interior Solution`,
          description: ``,
          listOfProperties: [],
          content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                              Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          date: "26 December,2022",
        },
        {
          id: 7,
          tag: "Kitchen",
          urlImg: "./img/details1.png",
          title: `Kitchen Best For Any Office & Business Interior Solution`,
          description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary have suffered.`,
          listOfProperties: [
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          ],
          content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered, or randomised words which don't look even slightly believable.
                              Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          date: "26 December,2022",
        },
        {
          id: 8,
          tag: "Kitchen",
          urlImg: "./img/details2.png",
          title: `Kitchen Best For Any Office & Business Interior Solution`,
          description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          listOfProperties: [
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          ],
          content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                              Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          date: "26 December,2022",
        },
        {
          id: 9,
          tag: "Bedroom",
          urlImg: "./img/details1.png",
          title: `Bedroom Best For Any Office & Business Interior Solution`,
          description: ``,
          listOfProperties: [],
          content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                              Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          date: "26 December,2022",
        },
        {
          id: 10,
          tag: "Building",
          urlImg: "./img/details2.png",
          title: `Building Best For Any Office & Business Interior Solution`,
          description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          listOfProperties: [
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          ],
          content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There some form, by injecthumour, or randomised words which don't look even slightly believable.
                              Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          date: "26 December,2022",
        },
        {
          id: 11,
          tag: "Building",
          urlImg: "./img/details1.png",
          title: `Building Best For Any Office & Business Interior Solution`,
          description: ``,
          listOfProperties: [
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
            `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          ],
          content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                              Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          date: "26 December,2022",
        },
        {
          id: 12,
          tag: "Architecture",
          urlImg: "./img/details2.png",
          title: `Architecture Best For Any Office & Business Interior Solution`,
          description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          listOfProperties: [],
          content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                              Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          date: "26 December,2022",
        },
      ],
    };
  },

  methods: {
    checkTag(id) {
      this.tags.forEach((x) => {
        x.check = x.id === id;
      });
      this.currentTag = this.tags.find((x) => x.check === true).tagName;
    },
  },

  computed: {
    taggedArticles() {
      return this.currentTag === ""
        ? this.articles
        : this.articles.filter((x) => x.tag === this.currentTag);
    },
  },

  template: `
                <section class="content center">
                    <article class="article-box">
                        <div class="article-box__article" v-for="item in taggedArticles" :key="item.id">
                            <h1 class="article-box__article_header">{{item.title}}</h1>
                            <p class="article-box__article_description article-box_text">{{item.description}}</p>
                            <ol type="1" class="article-box__article_list">
                                <li class="article-box_text" v-for="prop in item.listOfProperties" :key="prop.id">{{prop}}</li>
                            </ol>
                            <div class="article-box__article_img">
                                <img :src="item.urlImg" :alt="item.tag">
                            </div>
                            <p class="article-box__article_content article-box_text">{{item.content}}</p>
                            <div class="article-box__article-date-tag">
                                <p class="article-box__article-date-tag_date">{{item.date}}</p>
                                <div class="article-box__article-date-tag_tag check">{{item.tag}}</div>
                            </div>
                            <div class="article-box__div">
                                <p class="article-box__div_large-text">“</p>
                                <p class="article-box__div_med-text">
                                    The details are not the details.
                                    <br>
                                    They make the design.
                                </p>
                            </div>
                        </div>
                    </article>
                    <div class="tags">
                        <h1 class="tags_header">Tags</h1>
                        <div class="tags__box">
                            <button
                                class="tags__box_btn"
                                v-on:click="checkTag(tag.id)"
                                v-bind:class="{check: tag.check}"
                                v-for="tag in tags"
                                :key="tag.id"
                            >{{tag.tagName}}</button>
                        </div>
                    </div>
                </section>
  
  `,
});
