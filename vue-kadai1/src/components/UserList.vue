<template>
  <ul class="user-list">
    <UserItem
      v-for="user in users"
      :key="user.email"
      :user="user"
    ></UserItem>
  </ul>
</template>

<script>
import UserItem from "../components/UserItem.vue";

export default {
  components: {
    UserItem
  },
  props: {
    users: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.user-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}
</style>
