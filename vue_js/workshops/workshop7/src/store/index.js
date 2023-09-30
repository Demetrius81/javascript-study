import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    dataArr: [],
  },
  getters: {
    getDataInfo: (state) => state.dataArr.length === 0,

    getCount: (state) =>
      state.count >= 1000
        ? state.count.toString()
        : state.count >= 100
        ? "0" + state.count
        : state.count >= 10
        ? "00" + state.count
        : "000" + state.count,
  },
  mutations: {
    INCREMENT_BY_STEP(state, step) {
      state.count += step;
    },
    DECREMENT_BY_STEP(state, step) {
      state.count -= step;
      if (state.count < 0) {
        state.count = 0;
      }
    },
    SAVE_DATA(state, data) {
      state.dataArr = data;
    },
  },
  actions: {
    loadData(context) {
      setTimeout(() => {
        const data = [
          {
            id: 1,
            name: "Vasily",
            lastName: "Pupkin",
            birthDate: "22.04.1998",
          },
          {
            id: 2,
            name: "Jenette",
            lastName: "Parsons",
            birthDate: "09.11.1989",
          },
          {
            id: 3,
            name: "Garth",
            lastName: "Richard",
            birthDate: "12.04.1982",
          },
          {
            id: 4,
            name: "Fletcher",
            lastName: "Workman",
            birthDate: "11.01.1989",
          },
          {
            id: 5,
            name: "Sydnee",
            lastName: "Copeland",
            birthDate: "01.03.1979",
          },
          {
            id: 6,
            name: "Flavia",
            lastName: "Schwartz",
            birthDate: "05.25.2000",
          },
        ];
        context.commit("SAVE_DATA", data);
      }, 1000);
    },
  },
  modules: {},
});
