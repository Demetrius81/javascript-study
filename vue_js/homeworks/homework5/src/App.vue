<template>
  <div class="box">
    <product-details-component
      v-for="item in products"
      :key="item.id"
      :product="item"
    >
    </product-details-component>
  </div>
</template>

<script>
import ProductDetailsComponent from "./components/ProductDetailsComponent.vue";
export default {
  name: "App",
  components: { ProductDetailsComponent },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Product1",
          price: 100,
          available: true,
        },
        {
          id: 2,
          name: "Product2",
          price: 200,
          available: true,
        },
        {
          id: 3,
          name: "Product3",
          price: 125,
          available: false,
        },
        {
          id: 4,
          name: "Product4",
          price: 320,
          available: true,
        },
        {
          id: 5,
          name: "Product5",
          price: 175,
          available: false,
        },
      ],
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
.box {
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-flow: row wrap;
}
</style>
