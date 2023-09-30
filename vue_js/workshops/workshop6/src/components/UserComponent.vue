<template>
  <div class="user">
    <div class="user_logo">
      <img :src="user.logo" :alt="user.firstName" />
    </div>
    <div class="user__description">
      <p class="user__description_text">{{ user.firstName }}</p>
      <p class="user__description_text">{{ user.lastName }}</p>
      <p class="user__description_text">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserComponent",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-flow: column;
  background: #b6f5a3;

  &_logo {
    width: 200px;
    height: 200px;
    background: #ccc;
  }

  &__description {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    flex-flow: column;
  }
}
</style>
