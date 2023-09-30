<template>
  <div class="card">
    <h3 class="text">{{ product.name }}</h3>
    <p class="text">{{ formattedPrice }}</p>
    <p class="text" v-if="product.available">Available</p>
    <p class="text" v-if="!product.available">Out of stock</p>
  </div>
</template>

<script>
export default {
  name: "ProductDetailsComponent",
  props: {
    product: {
      type: Object,
      required: true,
      default() {
        return {
          id: 0,
          name: "default",
          price: 0,
          available: false,
        };
      },
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
  computed: {
    formattedPrice() {
      return `$${this.product.price}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 200px;
  height: 100px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-flow: column;
  gap: 10px;
  background: rgb(197, 250, 197);
}
.text {
  margin: 0;
  padding: 0;
}
</style>
