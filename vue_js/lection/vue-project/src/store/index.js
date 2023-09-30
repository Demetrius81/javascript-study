// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     //Начальное состояние
//   },
//   mutations: {
//     //Методы для изменения состояния
//   },
//   actions: {
//     //Методы для асинхронных операций
//   },
//   getters: {
//     //Методы для чтения состояния
//   },
//   modules: {
//     //Модули Vuex для разделения хранилища на подхранилища
//   },
// });

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentList: [],
  },

  mutations: {
    SET_PAYMENT(state, payments) {
      state.paymentList = payments;
    },
    ADD_PAYMENT(state, pay) {
      state.paymentList.push(pay);
    },
  },
  getters: {
    getPayment: (state) => state.paymentList,
    getFullPayment: (state) => {
      return state.paymentList.reduce((sum, el) => sum + el.value, 0);
    },
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        const paymentList = [
          {
            date: "28.03.2023",
            category: "Food",
            value: 169,
          },
          {
            date: "24.03.2023",
            category: "Transport",
            value: 360,
          },
          {
            date: "24.03.2023",
            category: "Food",
            value: 532,
          },
        ];
        commit("SET_PAYMENT", paymentList);
      }, 1000);
    },
  },
});
