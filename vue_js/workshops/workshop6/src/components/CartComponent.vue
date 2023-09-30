<template>
  <div>
    <product-component
      @changeCount="changeCount"
      v-for="item in cart.products"
      :key="item.id"
      :product="item"
    >
    </product-component>
    <p>Total: {{ cart.total }}</p>
  </div>
</template>

<script>
import ProductComponent from "./ProductComponent.vue";
export default {
  components: { ProductComponent },
  name: "JavascriptStudyCartComponent",

  data() {
    return {
      cart: {
        products: [
          {
            id: 1,
            price: 20,
            count: 1,
            subtotal: 0,
          },
          {
            id: 2,
            price: 35,
            count: 1,
            subtotal: 0,
          },
          {
            id: 3,
            price: 100,
            count: 1,
            subtotal: 0,
          },
        ],
        total: 0,
      },
    };
  },

  mounted() {},

  methods: {
    changeCount(data) {
      this.cart.products.forEach((x) => {
        if (x.id === data.id) {
          x.count = data.count;
          x.subtotal = data.subtotal;
        }
      });
      this.calcTotal();
    },
    calcTotal() {
      this.cart.total = this.cart.products.reduce(
        (sum, elem) => (sum += elem.subtotal),
        0
      );
    },
  },
  beforeMount() {
    this.cart.products.forEach((x) => {
      x.subtotal = x.price * x.count;
    });
    this.calcTotal();
  },
};
</script>

<style lang="scss" scoped></style>
