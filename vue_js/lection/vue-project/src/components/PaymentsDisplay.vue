<template>
  <div>
    Sum all payments: {{ getFV }}
    <div v-for="item in items" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },

  computed: {
    getFV() {
      return this.$store.getters.getFullPayment;
    },
  },
};
</script>

<style lang="scss" scoped></style>
