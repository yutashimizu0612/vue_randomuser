/***********************************
Random User APIからユーザー情報を取得
************************************/
const RANDOMUSERAPI = "https://randomuser.me/api"
import axios from "axios";

export default {
  methods: {
    getUsers: function(parameters) {
      return axios.get(RANDOMUSERAPI, {
        params: parameters
      })
      .then(response => {
        this.users = response.data.results;
      })
      .catch(() => {
        this.isError = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
    }
  }
}