<template>
  <div id="app">
    <section class="container">
      <AppTitle />
      <div class="contents">
        <!-- API通信失敗時 -->
        <template v-if="isError">
          <IsError error-text="アプリケーションで問題が発生しています。"></IsError>
        </template>

        <!-- API通信成功時 -->
        <template v-else>
          <!-- Loading中 -->
          <template v-if="isLoading">
            <IsLoading />
          </template>
          <!-- Load完了時 -->
          <template v-else>
            <SelectGender
              @get-users-by-gender="getUsersByGender($event)"
            />
            <!-- 検索結果が0の場合 -->
            <template v-if="isEmpty">
              <IsEmpty />
            </template>
            <!-- 検索結果が表示された場合 -->
            <template v-else>
              <UserList :users="users"></UserList>
              <Pagination
                :current-page="parameters.page"
                :total-pages="totalPages"
                :max-visible-buttons="maxVisibleButtons"
                @move-page="movePage($event)"
              />
            </template>
          </template>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import { fetchUsersData } from './api/fetchUsersData'
// コンポーネント
import AppTitle from './components/AppTitle.vue'
import SelectGender from './components/SelectGender.vue'
import UserList from './components/UserList.vue'
import Pagination from './components/Pagination.vue'
import IsError from './components/IsError.vue'
import IsLoading from './components/IsLoading.vue'
import IsEmpty from './components/IsEmpty.vue'

export default {
  name: 'app',
  components: {
    AppTitle,
    SelectGender,
    UserList,
    Pagination,
    IsError,
    IsLoading,
    IsEmpty
  },
  data: function() {
    return {
      isError: false,// APIエラーフラグ
      isLoading: true,
      users: [],
      parameters: {
        page: 1,
        results: 20,
        inc: "gender,name,location,email,phone,picture",
        gender: "",
      },
      totalPages: 30,
      maxVisibleButtons: 5
    };
  },
  created: function() {
    this.getUsers(this.parameters);
  },
  computed: {
    // 検索結果の有無フラグ
    isEmpty: function() {
      return this.users.length === 0;
    }
  },
  methods: {
    getUsers: function(parameters) {
      fetchUsersData(parameters)
        .then(response => {
          this.users = response.data.results;
        })
        .catch(() => {
          this.isError = true;
        })
        .finally(() => {
          this.isLoading = false;
        })
    },
    getUsersByGender: function(gender) {
      this.$set(this.parameters, 'gender', gender)
      this.$set(this.parameters, 'page', 1);
      this.getUsers(this.parameters);
    },
    movePage: function(page) {
      this.$set(this.parameters, 'page', page);
      this.getUsers(this.parameters);
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  width: 1000px;
  margin: 60px auto;
  box-sizing: border-box;
  @media(max-width: 1050px) {
    width: 100%;
    padding: 0 30px;
  }
  @media(max-width: 680px) {
    padding: 0 15px;
  }
}

.contents {
  margin-top: 30px;
}
</style>
