<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/dashboard">DashBoard</router-link>
        <router-link to="/about">AboutContent</router-link>
        <router-link to="/search">Search</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  created() {
    this.$router.push({ name: "dashboard" });
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

nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 16px;
}
</style>
