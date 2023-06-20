"use strict";

const compItem = {
  name: "comp-item",
  template: `<p>ItemInfo</p>`,
};

Vue.component("new-component", {
  props: ["title", "article"],
  data() {
    return {
      titleData: "Title",
      counter: 0,
    };
  },
  methods: {
    increase(step) {
      this.counter += step;
    },
  },
  components: {
    comp: compItem,
  },
  template: `
    <div>
        <h3>{{titleData}}</h3>
        <comp></comp>
        <h3>{{title}}</h3>
        <p>{{article}}</p>
        <p>Counter click {{counter}}</p>
        <button @click="increase(2)">Increase</button>
    </div>
  `,
});

Vue.component("some-comps", {
  template: `
    <div>
      <change-one></change-one>
      <change-two></change-two>
      <change-three></change-three>
    </div>
  `,
});

// Vue.component("std-comp", {
//   data() {
//     return { message: "text message" };
//   },
//   methods: {
//     newInfo() {
//       console.log("Hello methods");
//     },
//   },
//   computed: {
//     anotherMessage() {
//       return "Another " + this.message;
//     },
//   },
//   template: `
//     <div>
//         <h3>{{message}}</h3>
//         <p>{{anotherMessage}}</p>
//     </div>
//   `,
// });

Vue.component("change-one", {
  template: `
    <h2>Info Change Component</h2>
  `,
});
Vue.component("change-two", {
  template: `
    <div>
      <h1>Info Change Component No 2</h1>
      <h4>This is second component. Taste it.</h4>
    </div>
  `,
});
Vue.component("change-three", {
  template: `
    <ol>
      <li>InfoChangeComponent 1</li>
      <li>InfoChangeComponent 2</li>
      <li>InfoChangeComponent 3</li>
      <li>InfoChangeComponent 4</li>
    </ol>
  `,
});
