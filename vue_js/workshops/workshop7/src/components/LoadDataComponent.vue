<template>
  <div>
    <div class="empty">
      <button @click="load">Load</button>
    </div>
    <div v-if="getDataInfo" class="empty">
      Data is no load. <br />
      Click load button
    </div>
    <div class="box">
      <div class="box__item" v-for="item in dataArr" :key="item.id">
        <div class="box__item_text">
          id: <span>{{ item.id }}</span>
        </div>
        <div class="box__item_text">
          Name: <span>{{ item.name }}</span>
        </div>
        <div class="box__item_text">
          Surname: <span>{{ item.lastName }}</span>
        </div>
        <div class="box__item_text">
          Birth date: <span>{{ item.birthDate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "LoadDataComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    load() {
      this.loadData();
    },
    ...mapActions(["loadData"]),
  },
  computed: {
    ...mapState(["dataArr"]),
    ...mapGetters(["getDataInfo"]),
  },
};
</script>

<style lang="scss" scoped>
.box {
  background: #3d3d3d;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 10px;

  &__item {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row;

    &_text {
      text-align: start;
      width: 25%;
      font-size: 18px;
      font-weight: normal;

      & span {
        color: #bcffbc;
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
}

.empty {
  background: #3d3d3d;
  color: #fff;
  font-size: 72px;
  font-weight: bold;
  & button {
    background: #3d3d3d;

    border: #fff 1px solid;
    border-radius: 5px;
    width: 90px;
    height: 30px;
    color: #fff;
    font-size: 20px;
  }
}
</style>
