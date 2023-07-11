<template>
  <div>
    <div class="text">Details Component</div>
    <router-link to="/contacts">Contacts</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ContactsDetailsComponent",

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

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
