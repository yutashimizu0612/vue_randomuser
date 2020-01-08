<template>
  <div class="error">
    <h2 class="error__title">Error</h2>
    <p class="error__text">{{ errorText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    errorText: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  margin: 180px 0;
  &__title {
    color: #ef494a;
    font-size: 80px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  &__text {
    font-size: 24px;
  }
}
</style>
