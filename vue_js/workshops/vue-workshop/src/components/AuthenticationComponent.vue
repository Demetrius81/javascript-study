<template>
  <div>
    <div class="box" v-if="isAuthenticated">
      <h3>Поздравляю, вы вошли</h3>
    </div>
    <div class="box" v-else>
      <form action="#">
        <label> <input type="text" />Введите имя </label><br />
        <label> <input type="password" />Введите пароль </label><br />
        <div>
          <button type="submit">submit</button>
          <button type="reset">reset</button><br />
        </div>
      </form>
    </div>
    <div>
      <div class="pic" v-for="item in pics" :key="item.id">
        <img :src="item.pic" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthenticationComponent",
  props: {
    isAuthenticated: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pics: [
        {
          id: 1,
          pic: "./img/pic1_200x200.jpeg",
        },
        {
          id: 2,
          pic: "./img/pic2_200x200.jpeg",
        },
        {
          id: 3,
          pic: "./img/pic3_200x200.jpeg",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.box {
  width: 350px;
  height: 150px;
  background: #ccc;
  padding: 20px;
}
.box form {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-flow: column;
}
.pic {
  width: 200px;
  height: 200px;

  background: #ccc;
}
</style>
