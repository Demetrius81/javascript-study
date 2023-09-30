<template>
  <mortgage-calculator-component></mortgage-calculator-component>
</template>

<script>
import MortgageCalculatorComponent from "./components/MortgageCalculatorComponent.vue";

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

export default {
  name: "App",
  components: {
    MortgageCalculatorComponent,
  },
  data() {
    return {};
  },
  computed: {
    getUsers() {
      return users;
    },
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-flow: column;
}
</style>
