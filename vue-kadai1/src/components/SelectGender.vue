<template>
  <select @change="getUsersByGender()" v-model="selected" class="select-box">
    <option value disabled>gender</option>
    <option value="both">both</option>
    <option value="female">female</option>
    <option value="male">male</option>
  </select>
</template>

<script>
export default {
  data: function() {
    return {
      selected: ""
    }
  },
  methods: {
    getUsersByGender: function() {
      this.$emit('get-users-by-gender', this.selected);
    }
  }
};
</script>

<style lang="scss" scoped>
.select-box {
  display: block;
  margin: 0 0 30px auto;
}
</style>
