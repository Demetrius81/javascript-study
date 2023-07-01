<template>
  <div id="app">
    <calc-funtion></calc-funtion>
  </div>
</template>

<script>
import CalcFuntion from './components/CalcFuntion.vue'


export default {
  name: 'App',
  components: {
    CalcFuntion
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
