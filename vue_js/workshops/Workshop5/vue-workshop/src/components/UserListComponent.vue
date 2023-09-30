<template>
  <div class="user-list">
    <h3>Пользователи</h3>
    <div class="user-list__box">
      <user-component v-for="item in users" :key="item.id" :user="item">
      </user-component>
    </div>
  </div>
</template>

<script>
import UserComponent from "./UserComponent.vue";
export default {
  components: { UserComponent },
  name: "UserListComponent",
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.user-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 30px;

  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-flow: row wrap;
  }
}
</style>
