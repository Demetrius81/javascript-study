<template>
  <div class="counter">
    <div>
      <button
        v-for="item in btns"
        :key="item.id"
        class="btn increment"
        @click="INCREMENT_BY_STEP(item.num)"
      >
        +{{ item.str }}
      </button>
    </div>
    <div class="text">{{ getCount }}</div>
    <div>
      <button
        v-for="item in btns"
        :key="item.id"
        class="btn decrement"
        @click="DECREMENT_BY_STEP(item.num)"
      >
        -{{ item.str }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "CounterComponent",

  data() {
    return {
      btns: [
        {
          num: 1000,
          str: "1000",
        },
        {
          num: 100,
          str: "0100",
        },
        {
          num: 10,
          str: "0010",
        },
        {
          num: 1,
          str: "0001",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    ...mapMutations(["INCREMENT_BY_STEP", "DECREMENT_BY_STEP"]),
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["getCount"]),
  },
};
</script>

<style lang="scss" scoped>
.counter {
  padding: 100px 10px;
  background: #3d3d3d;
}

.btn {
  font-size: medium;
  width: 90px;
  height: 30px;
  border-radius: 5px;
}

.increment {
  background: #c0ffc0;
}

.decrement {
  background: #fdb4b4;
}

.text {
  font-size: 160px;
  font-weight: bold;
  color: #e9d0e9;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
