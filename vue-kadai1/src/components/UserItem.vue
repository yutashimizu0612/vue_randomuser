<template>
  <li class="user-item">
    <div class="user-item__image-wrap">
      <img :src="user.picture.large" alt="" class="user-item__image" />
    </div>
    <div class="user-item__profile">
      <h3 class="user-item__name">{{ user.name.first + " " + user.name.last }}</h3>
      <ul class="user-item__list">
        <li class="user-item__status">
          <dl>
            <dt class="user-item__term">Email</dt>
            <dd class="user-item__data">{{ user.email }}</dd>
          </dl>
        </li>
        <li class="user-item__status">
          <dl>
            <dt class="user-item__term">Tel</dt>
            <dd class="user-item__data">{{ user.phone }}</dd>
          </dl>
        </li>
        <li class="user-item__status">
          <dl>
            <dt class="user-item__term">City</dt>
            <dd class="user-item__data">{{ user.location.city }}</dd>
          </dl>
        </li>
        <li class="user-item__status">
          <dl>
            <dt class="user-item__term">State</dt>
            <dd class="user-item__data">{{ user.location.state }}</dd>
          </dl>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.user-item {
  width: calc(33.3% - 30px);
  box-sizing: border-box;
  border: 1px solid #707070;
  margin: 0 15px;
  margin-bottom: 60px;
  @media(max-width: 1050px) {
    width: calc(50% - 30px);
  }
  @media(max-width: 680px) {
    width: 100%;
    margin-bottom: 20px;
  }
  &__image {
    width: 100%;
  }
  &__profile {
    padding: 25px 15px;
  }
  &__name {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 25px;
  }
  &__status {
    font-size: 18px;
    text-align: left;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  &__term {
    font-weight: bold;
    margin-bottom: 5px;
  }
  &__data {
    overflow-wrap: break-word;
    font-size: 16px;
  }
}
</style>
