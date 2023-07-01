<template>
  <div>
    <div v-if="isAuthenticated">
      Поздравляю, вы успешно аутентифицировались.
    </div>
    <div v-if="!isAuthenticated">
      <form action="#" @submit="authenticate">
        <label>
          <input type="text" v-model="user.firstName" />
          Введите имя
        </label>
        <br />
        <label>
          <input type="text" v-model="user.lastName" />
          Введите Фамилию
        </label>
        <br />
        <label>
          <input type="password" v-model="user.password" />
          Введите пвроль
        </label>
        <br />
        <button type="reset">Сбросить</button>
        <button type="submit">Войти</button>
      </form>
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
      user: {
        firstName: "",
        lastName: "",
        password: "",
      },
    };
  },

  mounted() {},

  methods: {
    authenticate() {},
  },
};
</script>

<style lang="scss" scoped></style>
