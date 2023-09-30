<template>
  <div>
    <h4>{{ product.product }}</h4>
    <p>{{ product.description }}</p>
    <p>$ {{ product.price }}</p>
  </div>
</template>

<script>
export default {
  name: "Workshop8CardComponent",
  props: {
    product: {
      type: Object,
      default() {
        return {
          id: 0,
          product: "default default",
          description:
            "default default default default default default default default default default",
          price: 888,
        };
      },
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
div {
  width: 200px;
  height: 200px;
  background: #d2fde1;
  display: flex;
  flex-flow: column;
  align-items: start;
  justify-content: center;
  gap: 20px;

  h4 {
    font-size: 28px;
  }
  p {
    font-size: 14px;
  }
}
</style>
