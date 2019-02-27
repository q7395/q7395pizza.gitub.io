import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'


import { store } from './store/store.js'



Vue.use(VueRouter)

// 配置默认根路径
axios.defaults.baseURL = 'https://wd3087642862oqzakd.wilddogio.com/'

// 配置Vue原型(在任何组件中都可以正常使用axios)
Vue.prototype.http = axios //or Vue.prototype.$axios = axios,这个名字随便起

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // return { x: 0, y: 100 }
    // return { selector: ".btn" }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
