<template>
  <div>
    <input type="text" placeholder="category" v-model="category" />
    <input type="text" placeholder="value" v-model="value" />
    <input type="text" placeholder="data" v-model="data" />
    <button @click="onSave">Save</button>
  </div>
</template>

<script>
export default {
  name: "AddList",

  data() {
    return {
      category: "",
      value: "",
      data: "",
    };
  },

  methods: {
    onSave() {
      const data = {
        date: this.data,
        category: this.category,
        value: +this.value,
      };
      this.$emit("addNewPay", data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
