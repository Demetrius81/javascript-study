<template>
  <div>
    <div class="text">Contacts</div>
    <router-link to="/contacts/details">Details</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsPage",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.text {
  padding: 50px;
  text-align: center;
  font-size: 72px;
}
</style>
