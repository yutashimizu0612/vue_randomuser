/***********************************
Random User APIからユーザー情報を取得
************************************/
const RANDOMUSERAPI = "https://randomuser.me/api"
import axios from "axios";

export const fetchUsersData = (parameters) => {
  return axios.get(RANDOMUSERAPI, {
    params: parameters
  })
}