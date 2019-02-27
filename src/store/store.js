import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'

import menu from './module/menu'
import users from './module/users'
import status from './module/status'


Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    menu,
    users,
    status
  }

  // state: {
  //   // 设置属性
  // },
  // getters
  // //   : {
  // //   // 获取属性的状态

  // // }
  // ,
  // mutations
  // //   : {
  // //   // 改变属性的状态

  // // }
  // ,
  // actions
  // // :{
  // //   // 应用mutations

  // // }
})