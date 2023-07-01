<template>
  <div>
    <cart-component></cart-component>
  </div>
</template>

<script>
const users = [
  {
    id: 1,
    logo: "./img/pic1_200x200.jpeg",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivan@example.com",
  },
  {
    id: 2,
    logo: "./img/pic2_200x200.jpeg",
    firstName: "Петр",
    lastName: "Петров",
    email: "petr@example.com",
  },
  {
    id: 3,
    logo: "./img/pic3_200x200.jpeg",
    firstName: "Анна",
    lastName: "Сидорова",
    email: "anna@example.com",
  },
  {
    id: 1,
    logo: "./img/pic1_200x200.jpeg",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivan@example.com",
  },
  {
    id: 2,
    logo: "./img/pic2_200x200.jpeg",
    firstName: "Петр",
    lastName: "Петров",
    email: "petr@example.com",
  },
  {
    id: 3,
    logo: "./img/pic3_200x200.jpeg",
    firstName: "Анна",
    lastName: "Сидорова",
    email: "anna@example.com",
  },
  {
    id: 1,
    logo: "./img/pic1_200x200.jpeg",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivan@example.com",
  },
  {
    id: 2,
    logo: "./img/pic2_200x200.jpeg",
    firstName: "Петр",
    lastName: "Петров",
    email: "petr@example.com",
  },
  {
    id: 3,
    logo: "./img/pic3_200x200.jpeg",
    firstName: "Анна",
    lastName: "Сидорова",
    email: "anna@example.com",
  },
  {
    id: 1,
    logo: "./img/pic1_200x200.jpeg",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivan@example.com",
  },
  {
    id: 2,
    logo: "./img/pic2_200x200.jpeg",
    firstName: "Петр",
    lastName: "Петров",
    email: "petr@example.com",
  },
  {
    id: 3,
    logo: "./img/pic3_200x200.jpeg",
    firstName: "Анна",
    lastName: "Сидорова",
    email: "anna@example.com",
  },
  {
    id: 1,
    logo: "./img/pic1_200x200.jpeg",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivan@example.com",
  },
  {
    id: 2,
    logo: "./img/pic2_200x200.jpeg",
    firstName: "Петр",
    lastName: "Петров",
    email: "petr@example.com",
  },
  {
    id: 3,
    logo: "./img/pic3_200x200.jpeg",
    firstName: "Анна",
    lastName: "Сидорова",
    email: "anna@example.com",
  },
  {
    id: 1,
    logo: "./img/pic1_200x200.jpeg",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivan@example.com",
  },
  {
    id: 2,
    logo: "./img/pic2_200x200.jpeg",
    firstName: "Петр",
    lastName: "Петров",
    email: "petr@example.com",
  },
  {
    id: 3,
    logo: "./img/pic3_200x200.jpeg",
    firstName: "Анна",
    lastName: "Сидорова",
    email: "anna@example.com",
  },
  // Добавьте других пользователей по аналогии
];

import CartComponent from "./components/CartComponent.vue";
export default {
  name: "App",
  components: {
    CartComponent,
  },
  data() {
    return {
      users: users,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
