<template>
  <div>
    <card-component v-for="item in products" :key="item.id" :product="item">
    </card-component>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
export default {
  components: { CardComponent },
  name: "CardBoxComponent",
  props: {
    products: {
      type: Array,
      default() {
        return [];
      },
    },

    // id: {
    //   type: Number,
    // },
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  padding: 50px;
  gap: 20px;
}
</style>
