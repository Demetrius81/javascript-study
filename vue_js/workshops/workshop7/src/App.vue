<template>
  <div>
    <counter-component></counter-component>
    <load-data-component></load-data-component>
  </div>
</template>

<script>
import CounterComponent from "./components/CounterComponent.vue";
import LoadDataComponent from "./components/LoadDataComponent.vue";
export default {
  name: "App",
  components: { CounterComponent, LoadDataComponent },
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
