<template>
  <div id="app">
    <header>
      <!-- <nav @click="clickMenu">
        <a href="#dashboard" class="menu__link">DashBoard</a>
        <a href="#about" class="menu__link">AboutContent</a>
        <a href="#notfound" class="menu__link">NotFound</a>
      </nav> -->
      <nav>
        <router-link to="/dashboard">DashBoard</router-link>
        <router-link to="/about">AboutContent</router-link>
      </nav>
    </header>
    <!-- <dash-board v-if="page === 'dashboard'"></dash-board>
    <about-content v-if="page === 'about'"></about-content>
    <not-found v-if="page === 'notfound'"></not-found> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import AboutContent from "./pages/AboutContent.vue";
// import DashBoard from "./pages/DashBoard.vue";
// import NotFound from "./pages/NotFound.vue";
export default {
  name: "App",

  components: {
    // DashBoard,
    // AboutContent,
    // NotFound
  },

  data() {
    return {
      // page: "dashboard",
    };
  },

  created() {
    this.$router.push({ name: "dashboard" });
  },

  // methods: {
  //   setPage() {
  //     this.page = window.location.hash.slice(1);
  //   },
  //   clickMenu() {
  //     this.setPage();
  //     window.addEventListener("hashchange", () => {
  //       this.setPage();
  //     });
  //   },
  //   mounted() {
  //     const links = document.querySelectorAll(".menu__links");
  //     links.forEach((x) => {
  //       x.addEventListener("click", (e) => {
  //         e.preventDefault();
  //         history.pushState({}, "", x.href);
  //       });
  //     });
  //   },
  // },
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

nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 16px;
}
</style>
