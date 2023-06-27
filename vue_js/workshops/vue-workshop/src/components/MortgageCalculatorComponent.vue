<template>
  <div>
    <form action="#">
      <label>
        <input
          placeholder="Сумма кредита"
          type="text"
          v-model.number="amountOfCredit"
          min="0"
        />
        Введите сумму кредита, руб.</label
      ><br />
      <label>
        <input
          placeholder="Процентная ставка"
          type="text"
          v-model.number="percentageRate"
          min="0"
          max="100"
        />
        Введите процентную ставку, % годовых.</label
      ><br />
      <label>
        <input
          placeholder="Срок кредитования"
          type="text"
          v-model.number="creditPeriod"
          min="0"
        />
        Введите срок кредитования, мес.</label
      ><br />
      <div>
        <button type="reset">Сбросить</button>
      </div>
    </form>
    <div>
      <p>Общая сумма выплат равна: {{ totalPayment }}</p>
      <payment-component
        v-for="item in monthlyPayment"
        :key="item.id"
        :pay="item"
        v-show="calculateThis"
      >
      </payment-component>
    </div>
  </div>
</template>

<script>
import PaymentComponent from "./PaymentComponent.vue";
export default {
  components: { PaymentComponent },
  name: "MortgageCalculatorComponent",

  data() {
    return {
      amountOfCredit: "",
      percentageRate: "",
      creditPeriod: "",
    };
  },

  mounted() {},

  methods: {
    calcBalanceOwned(month) {
      return (this.amountOfCredit / this.creditPeriod) * month;
    },
  },

  computed: {
    monthlyPayment() {
      if (this.calculateThis) {
        let payments = [];

        for (let i = 0; i < this.creditPeriod; i++) {
          payments.push({
            id: i + 1,
            sum:
              this.calcBalanceOwned(this.creditPeriod - i) *
                this.percentagePerMonth +
              this.amountOfCredit / this.creditPeriod,
          });
        }

        return payments;
      } else {
        return [];
      }
    },
    totalPayment() {
      if (this.calculateThis) {
        return this.monthlyPayment.reduce((sum, elem) => sum + elem.sum, 0);
      } else {
        return 0;
      }
    },
    percentagePerMonth() {
      if (this.calculateThis) {
        return this.percentageRate / 12 / 100;
      } else {
        return 0;
      }
    },
    calculateThis() {
      return !(
        this.amountOfCredit === "" ||
        this.percentageRate === "" ||
        this.creditPeriod === ""
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
