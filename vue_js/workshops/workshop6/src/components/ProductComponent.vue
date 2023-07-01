<template>
  <div>
    <p>Product name: {{ product.id }}</p>
    <input type="number" v-model="count" @change="calculateSubtotal" /> <br />
    <p>Price: {{ product.price }}</p>
    <p>Subtotal: {{ subtotal }}</p>
  </div>
</template>

<script>
export default {
  name: "JavascriptStudyProductComponent",
  props: {
    product: {
      type: Object,
      default() {
        return {
          id: 0,
          price: 0,
          count: 0,
          subtotal: 0,
        };
      },
    },
  },
  data() {
    return {
      price: this.product.price,
      count: this.product.count,
    };
  },

  mounted() {},

  methods: {
    calculateSubtotal() {
      const changedProduct = {
        id: this.product.id,
        price: this.product.price,
        count: this.count,
        subtotal: this.subtotal,
      };
      this.$emit("changeCount", changedProduct);
    },
  },

  computed: {
    subtotal() {
      return this.count * this.price;
    },
  },
};
</script>

<style lang="scss" scoped></style>
