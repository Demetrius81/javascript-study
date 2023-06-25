<template>
  <div id="app">
    <GalleryComponent></GalleryComponent>
  </div>
</template>

<script>
import GalleryComponent from './components/GalleryComponent.vue'

export default {
  name: 'App',
  components: {
    GalleryComponent,
  },
  data() {
    return {
    }
  },
}
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
