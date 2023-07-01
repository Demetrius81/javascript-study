<template>
  <div v-show="!pay.id === 0">
    Ежемесячный платеж за {{ pay.id }} месяц составляет {{ pay.sum }} рублей
  </div>
</template>

<script>
export default {
  name: "PaymentComponent",
  props: {
    pay: {
      type: Object,
      required: true,
      default() {
        return { id: 0, sum: 0 };
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
